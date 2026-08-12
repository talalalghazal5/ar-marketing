<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreItemRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => [
                'required',
                'string',
                'max:255'
            ],

            'slug' => [
                'required',
                'string',
                'unique:items,slug'
            ],

            'description' => [
                'required'
            ],

            'itemCategory' => [
                'required',
                Rule::in([
                    'برمجة وتطوير',
                    'تصميم',
                    'تسويق',
                    'تصوير',
                    'مؤثرات بصرية'
                ])
            ],
            // 'images'=>[
            //     'string'
            // ],

            'featured' => [
                'boolean'
            ],

            'status' => [
                'required',
                'boolean'
            ],

            'timeTook' => [
                'nullable',
                'integer',
                'min:1'
            ],

            // 'technologies' => [
            //     Rule::requiredIf($this->type == 'development'),
            //     'nullable',

            // ],

            'url' => [
                Rule::requiredIf($this->type == 'برمجة وتطوير'),
                'nullable',
                'url'
            ],

            'brandOverview' => [
                Rule::requiredIf($this->type == 'تصميم'),
                'nullable',
                'string'
            ],

            'overview' => [
                Rule::requiredIf($this->type == 'مؤثرات بصرية'),
                'nullable',
                'string'
            ],

            'result' => [
                Rule::requiredIf($this->type == 'مؤثرات بصرية'),
                'nullable',
                'string'
            ],
            'technologies' => [
                Rule::requiredIf($this->type == 'برمجة وتطوير'),
                'array',
            ],

            'technologies.*' => [
                'string',
                'max:255',
            ],
             'galleryDesign' => [
                Rule::requiredIf($this->type == 'تصميم'),
                'sometimes',
                'array',
            ],

            'galleryDesign.*' => [
                'string',
                'max:2048',
            ],
             'galleryVfx' => [
                Rule::requiredIf($this->type == 'مؤثرات بصرية'),
                'sometimes',
                'array',
            ],

            'galleryVfx.*' => [
                'array',
                'max:255',
            ],
             'galleryPhotography' => [
                Rule::requiredIf($this->type == 'تصوير'),
                'sometimes',
                'array',
            ],

            'galleryPhotography.*' => [
                'array',
                'max:255',
            ],
              'brand_goals' => [
                Rule::requiredIf($this->type == 'تصميم'),
                'sometimes',
                'array',
            ],

            'brand_goals.*' => [
                'string',
                'max:255',
            ],
              'features' => [
                Rule::requiredIf($this->type == 'برمجة وتطوير'),
                'sometimes',
                'array',
            ],

            'features.*' => [
                'string',
                'max:255',
            ],
              'platforms' => [
                Rule::requiredIf($this->type == 'تسويق'),
                'sometimes',
                'array',
            ],

            'platforms.*' => [
                'string',
                'max:255',
            ],
               'results' => [
                Rule::requiredIf($this->type == 'تسويق'),
                'sometimes',
                'array',
            ],

             'results.*' => [
                'string',
                'max:255',
            ],

            'image' => [
                'nullable',
                'string'
            ],

            // 'images.*' => [
            //     'string',
            //     // 'mimes:jpg,jpeg,png,webp',
            //     // 'max:2048',
            // ],
            // 'technologies' => 'required|array',

            // 'technologies.*' => 'required|string|max:255',

            // 'images' => 'required|array',

            // 'images.*' => 'required|string|max:255',

            // 'galleryDesien' => 'nullable|array',

            // 'galleryDesigen.*' => 'nullable|string|max:255',

            // 'galleryVfx' => 'nullable|array',

            // 'galleryVfx.*' => 'nullable|string|max:255',


        ];
    }
    public function messages(): array
    {
        return [

            'title.required' => 'Title is required.',

            'slug.required' => 'Slug is required.',

            'slug.unique' => 'Slug already exists.',

            'description.required' => 'Description is required.',

            'type.required' => 'Item type is required.',

            'status.required' => 'status is required.',

            'url.required' => 'Website URL is required for development projects.',

            'brandOverview.required' => 'Brand overview is required.',

            'overview.required' => 'Overview is required.',

            'result.required' => 'Result is required.',

            'technologies.required' => 'Technologies are required.',

            'technologies.array' => 'Technologies must be an array.',

            'images.required' => 'Images are required.',

            'images.array' => 'Images must be an array.',


        ];
    }
}

