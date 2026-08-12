<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DevelopmentItem extends Model
{
    protected $fillable = [
        'itemId',
        'url',
        'technologies',
        'features',
    ];
    protected $casts = [
        'technologies' => 'array',
        'features'=>'array',
    ];

    public function item()
    {
        return $this->belongsTo(Item::class);
    }
    // public function technologies()
    // {
    //     return $this->hasMany(Technology::class,'developmentItemsId');
    // }

    public function features()
    {
        return $this->hasMany(Feature::class,'developmentItemId');
    }
}
