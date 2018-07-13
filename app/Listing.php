<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    protected $casts=[
        'requirement_wifi'=>'boolean',
        'requirement_animaux_admis'=>'boolean',
        'requirement_tv'=>'boolean',
        'requirement_cuisine'=>'boolean',
        'requirement_petit_dej'=>'boolean',
        'requirement_laptop'=>'boolean'
    ];
}
