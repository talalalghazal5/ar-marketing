<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreItemRequest;
use App\Http\Requests\UpdateItemRequest;
use App\Models\Technology;
use Egulias\EmailValidator\Result\Reason\ExceptionFound;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\Item;
use App\Models\DevelopmentItem;
use App\Models\DesignItem;
use App\Models\MarketingItem;
use App\Models\PhotographyItem;
use App\Models\VfxItem;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            //     {
            //     $items = Item::all();
            //     return response()->json($items, 200);
            // }
            return Item::with([
                'development',
                'design',
                'marketing',
                'photography',
                'vfx'
            ])
                ->latest()
                ->paginate(10);
        } catch (\Exception $e) {

            DB::rollBack();

            return response()->json([
                'message' => $e->getMessage()
            ], 500);

        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreItemRequest $request)
    {

        DB::beginTransaction();

        try {
            $data = $request->validated();
            //dd($request->galleryPhotography);
            $item = Item::create([

                'title' => $request->title,
                'slug' => $request->slug,
                'description' => $request->description,
                'itemCategory' => $request->itemCategory,
                'featured' => $request->featured,
                'status' => $request->status,
                'timeTook' => $request->timeTook,
                'image' => $request->image,

            ]);

            switch ($request->itemCategory) {

                case 'برمجة وتطوير':

                    $development = DevelopmentItem::create([
                        'itemId' => $item->id,
                        'url' => $request->url,
                        'technologies' => $request->technologies,
                        'features' => $request->features,
                    ]);
                    // foreach ($request->technologies as $technology) {

                    //      $development->technologies()->create([
//         'name' => $technology,
//     ]);}
                    break;

                case 'تصميم':

                    DesignItem::create([
                        'itemId' => $item->id,
                        'brandOverview' => $request->brandOverview,
                        'galleryDesign' => $request->galleryDesign,
                        'brand_goals' => $request->brand_goals,
                    ]);

                    break;

                case 'تسويق':

                    MarketingItem::create([
                        'itemId' => $item->id,
                        'platforms' => $request->platforms,
                        'results' => $request->results,
                    ]);

                    break;

                case 'تصوير':

                    PhotographyItem::create([
                        'itemId' => $item->id,
                        'galleryPhotography' => $request->galleryPhotography,
                    ]);

                    break;

                case 'مؤثرات بصرية':

                    VfxItem::create([
                        'itemId' => $item->id,
                        'overview' => $request->overview,
                        'result' => $request->result,
                        'galleryVfx' => $request->galleryVfx,
                    ]);

                    break;
            }

            DB::commit();

            //return response()->json($item, 201);
            return $item->load([
                'marketing',
                'development',
                'photography',
                'vfx',
                'design'
            ]);

        } catch (\Exception $e) {

            DB::rollBack();

            return response()->json([
                'message' => $e->getMessage()
            ], 500);

        }
    }

    /**
     * Display the specified resource.
     */
    public function show($itemId)
    {

        try {

            $item = Item::findOrfail($itemId);

            return $item->load([
                'development',
                'design',
                'marketing',
                'photography',
                'vfx'
            ]);

        } catch (ModelNotFoundException $e) {
            return response()->json(['message' => 'item is not existed'], 404);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 500);

        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateItemRequest $request, $itemId)
    {

        DB::beginTransaction();

        try {

            $item = Item::with([
                'development',
                'design',
                'marketing',
                'photography',
                'vfx'
            ])->findOrFail($itemId);

            // تحديث جدول items
            $item->update($request->only([
                'title',
                'slug',
                'description',
                'featured',
                'status',
                'timeTook',
                'image',
            ]));

            switch ($item->itemCategory) {

                case 'برمجة وتطوير':

                    if ($item->development) {
                        $item->development->update($request->only([
                            'url',
                            'technologies',
                            'features',
                        ]));


                        // if ($request->has('technologies')) {

                        //     $item->development->technologies()->delete();

                        //     foreach ($request->technologies as $technology) {
                        //         $item->development->technologies()->create([
                        //             'name' => $technology,
                        //         ]);
                        //     }
                        // }
                    }

                    break;

                case 'تصميم':

                    if ($item->design) {
                        $item->design->update($request->only([
                            'brandOverview',
                            'galleryDesign',
                            'brand_goals',
                        ]));
                    }

                    break;

                case 'تسويق':

                    if ($item->marketing) {
                        $item->marketing->update($request->only([
                            'platforms',
                            'results',
                        ]));
                    }

                    break;

                case 'تصوير':

                    if ($item->photography) {
                        $item->photography->update($request->only([
                            'galleryPhotography'
                        ]));
                    }

                    break;

                case 'مؤثرات بصرية':

                    if ($item->vfx) {
                        $item->vfx->update($request->only([
                            'overview',
                            'result',
                            'galleryVfx',
                        ]));
                    } else {
                        // Create vfx relationship if it doesn't exist
                        VfxItem::create([
                            'itemId' => $item->id,
                            'overview' => $request->overview ?? '',
                            'result' => $request->result ?? '',
                            'galleryVfx' => $request->galleryVfx ?? [],
                        ]);
                    }

                    break;
            }

            DB::commit();

            return response()->json([
                'message' => 'Item updated successfully',
                'data' => $item->load([

                    'development',
                    'design',
                    'marketing',
                    'photography',
                    'vfx',
                ])
            ]);


        } catch (ModelNotFoundException $e) {
            return response()->json(['message' => 'item is not existed'], 404);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'error' => $e->getMessage(),
            ], 500);

        }
        // DB::beginTransaction();

        // try{

        //     $item->update([

        //         'title'=>$request->title,
        //         'slug'=>$request->slug,
        //         'description'=>$request->description,
        //         'featured'=>$request->featured,
        //         'timeTook'=>$request->time_took,

        //     ]);

        //     DB::commit();

        //     return response()->json($item);

        // }catch(\Exception $e){

        //     DB::rollBack();

        //     return response()->json([
        //         'message'=>$e->getMessage()
        //     ],500);

        // }
    }

    // /**
    // Remove the specified resource from storage.
    // **/
    public function destroy($itemId)
    {
        try {
            $item = Item::findOrFail($itemId);
            $item->delete();

            return response()->json([
                'message' => 'Deleted Successfully'
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json(['message' => 'item is not existed'], 404);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 500);

        }
    }
    public function searchByType($itemCategory)
    {
        $items = Item::with([
            'development',
            'design',
            'marketing',
            'photography',
            'vfx'
        ])->where('itemCategory', 'LIKE', "{$itemCategory}%")->orderBy('itemCategory')->get();

        return response()->json($items, 200);
    }
    public function filtering($type)
    {
        $items = Item::with([
            'development',
            'design',
            'marketing',
            'photography',
            'vfx'
        ])->where('itemCategory', $type)->orderBy('type')->get();

        return response()->json($items, 200);
    }

    public function searchByTitle($title)
    {
        $items = Item::with([
            'development',
            'design',
            'marketing',
            'photography',
            'vfx'
        ])->where('title', 'LIKE', "{$title}%")->orderBy('title')->get();

        return response()->json($items, 200);
    }

    public function searchBySlug($slug)
    {
        $items = Item::with([
           'development',
            'design',
            'marketing',
            'photography',
            'vfx'
        ])->where('slug', 'LIKE', "{$slug}%")->orderBy('slug')->get();

        return response()->json($items, 200);
    }
}
