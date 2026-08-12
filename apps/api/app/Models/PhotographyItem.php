<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PhotographyItem extends Model
{
    protected $fillable = [
        'itemId',
        'galleryPhotography',
    ];
    protected $casts = [
        'galleryPhotography' => 'array',
    ];
    protected $table = 'photography_items';

    public function item()
    {
        return $this->belongsTo(Item::class);
    }
}
