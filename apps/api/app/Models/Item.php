<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{

    protected $fillable = [
        'title',
        'slug',
        'description',
        'itemCategory',
        'featured',
        'status',
        'timeTook',
        'image',
    ];

    protected $casts = [
        'featured' => 'boolean',
        'status' => 'boolean',
        //'images' => 'array',
    ];


    // العلاقات

    public function development()
    {
        return $this->hasOne(DevelopmentItem::class,'itemId');
    }

    public function design()
    {
        return $this->hasOne(DesignItem::class,'itemId');
    }

    public function marketing()
    {
        return $this->hasOne(MarketingItem::class,'itemId');
    }

    public function photography()
    {
        return $this->hasOne(PhotographyItem::class,'itemId');
    }

    public function vfx()
    {
        return $this->hasOne(VfxItem::class,'itemId');
    }

    // public function images()
    // {
    //     return $this->hasMany(GalleryImage::class,'itemId');
    // }

    // public function technologies()
    // {
    //     return $this->hasMany(Technology::class,'developmentItemsId');
    // }

}
