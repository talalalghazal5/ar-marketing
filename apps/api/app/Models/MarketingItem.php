<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MarketingItem extends Model
{
       protected $fillable = [
        'itemId',
        'platforms',
        'results',
    ];
    protected $casts = [
        'platforms' => 'array',
        'results' => 'array',
    ];

    public function item()
    {
        return $this->belongsTo(Item::class);
    }

    // public function results()
    // {
    //     return $this->hasMany(Result::class,'marketingItemId');
    // }

    // public function platforms()
    // {
    //     return $this->belongsToMany(
    //         Platform::class,
    //         'marketing_platform','marketingItemId', 'platformId'
    //     );
    // }
}
