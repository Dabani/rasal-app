<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;

    protected $fillable = [
        'firstname',
        'lastname',
        'totem',
        'nationality',
        'id_pp',
        'date_of_birth',
        'place_of_birth',
        'promise_year',
        'totem_year',
        'unit_affiliation',
        'residence',
        'location',
        'email',
        'telephone',
        'education',
        'profession',
        'photo',
        'bio',
        'joined_at',
        'status'
    ];
}
