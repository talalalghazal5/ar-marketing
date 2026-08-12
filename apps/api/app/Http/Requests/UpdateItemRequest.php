<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateItemRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [

            'title' => 'sometimes|string|max:255',

            'slug' => [
                'sometimes',
                'string',
                Rule::unique('items', 'slug')->ignore($this->route('itemId')),
            ],

            'description' => 'sometimes|string',

            // 'type' => [
            //     'sometimes',
            //     Rule::in([
            //         'development',
            //         'design',
            //         'marketing',
            //         'photography',
            //         'vfx'
            //     ])
            // ],

            'featured' => 'sometimes|boolean',

            'status' => 'sometimes|boolean',

            'timeTook' => 'sometimes|integer|min:1',

            'image' => 'sometimes|string',

            // Development
            'url' => 'sometimes|url',

            'technologies' => 'sometimes|array',
            'technologies.*' => 'string|max:255',

            'features' => 'sometimes|array',
            'features.*' => 'string|max:2048',

            // Design
            'brandOverview' => 'sometimes|string',

            'galleryDesign' => 'sometimes|array',
            'galleryDesign.*' => 'string|max:2048',

            'brand_goals' => 'sometimes|array',
            'brand_goals.*' => 'string|max:255',
            //photography
             'galleryPhotography' => 'sometimes|array',
            'galleryPhotography.*' => 'string|max:2048',

            // VFX
            'overview' => 'sometimes|string',
            'result' => 'sometimes|string',

            'galleryVfx' => 'sometimes|array',
            'galleryVfx.*' => 'string|max:255',

            'platforms' => 'sometimes|array',
            'platforms.*' => 'string|max:255',

            'results' => 'sometimes|array',
            'results.*' => 'string|max:255',
        ];
    }

    public function messages(): array
    {
        return [
            'slug.unique' => 'Slug already exists.',

            'url.url' => 'Website URL is invalid.',

            'images.array' => 'Images must be an array.',
            'technologies.array' => 'Technologies must be an array.',
            'galleryDesign.array' => 'Gallery Design must be an array.',
            'galleryVfx.array' => 'Gallery VFX must be an array.',
        ];
    }
}
