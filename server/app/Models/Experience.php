<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;

class Experience extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'company',
        'role',
        'location',
        'type',
        'description',
        'started_at',
        'ended_at',
        'is_current',
        'is_public',
        'order',
    ];

    protected $casts = [
        'started_at' => 'date',
        'ended_at' => 'date',
        'is_current' => 'boolean',
        'is_public' => 'boolean',
        'order' => 'integer',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function scopePublic(Builder $query): Builder
    {
        return $query->where('is_public', true)->orderBy('order');
    }

    public function getPeriodAttribute(): string
    {
        $start = $this->started_at?->format('Y-m') ?? '';
        $end = $this->is_current ? 'present' : ($this->ended_at?->format('Y-m') ?? '');

        return trim("{$start} → {$end}");
    }
}
