<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;

class Skill extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'category',
        'slug',
        'icon',
        'is_public',
        'order',
    ];

    protected $casts = [
        'is_public' => 'boolean',
        'order' => 'integer',
    ];

    public function projects(): BelongsToMany
    {
        return $this->belongsToMany(Project::class)
            ->withPivot(['level', 'order'])
            ->withTimestamps();
    }

    public function scopePublic(Builder $query): Builder
    {
        return $query->where('is_public', true)->orderBy('order');
    }
}
