<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'slug',
        'summary',
        'description',
        'repo_url',
        'demo_url',
        'started_at',
        'ended_at',
        'is_featured',
        'is_public',
        'order',
    ];

    protected $casts = [
        'started_at' => 'date',
        'ended_at' => 'date',
        'is_featured' => 'boolean',
        'is_public' => 'boolean',
        'order' => 'integer',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function skills(): BelongsToMany
    {
        return $this->belongsToMany(Skill::class)
            ->withPivot(['level', 'order'])
            ->withTimestamps();
    }

    public function medias(): MorphMany
    {
        return $this->morphMany(Media::class, 'mediable')->orderBy('order');
    }

    public function scopePublic(Builder $query): Builder
    {
        return $query->where('is_public', true)->orderBy('order');
    }

    public function scopeFeatured(Builder $query): Builder
    {
        return $query->where('is_featured', true)->orderBy('order');
    }

    public function getDurationAttribute(): ?string
    {
        if (!$this->started_at) return null;

        $start = $this->started_at->format('Y-m');
        $end = $this->ended_at ? $this->ended_at->format('Y-m') : 'present';

        return "{$start} → {$end}";
    }
}
