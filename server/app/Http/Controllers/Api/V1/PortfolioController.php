<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;

class PortfolioController extends Controller
{
    /**
     * Retourne le portfolio complet d’un user :
     * - user (profil)
     * - projects (+ skills)
     * - experiences
     * - educations
     */
    public function show(User $user): JsonResponse
    {
        $user->load([
            'projects' => function ($q) {
                $q->where('is_public', true)
                  ->orderBy('order')
                  ->with(['skills' => function ($qs) {
                      $qs->orderBy('order');
                  }]);
            },
            'experiences' => function ($q) {
                $q->orderBy('order');
            },
            'educations' => function ($q) {
                $q->orderBy('order');
            },
        ]);

        return response()->json([
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'headline' => $user->headline,
                'bio' => $user->bio,
                'location' => $user->location,
                'github_url' => $user->github_url,
                'linkedin_url' => $user->linkedin_url,
            ],
            'projects' => $user->projects->map(function ($p) {
                return [
                    'id' => $p->id,
                    'title' => $p->title,
                    'description' => $p->description,
                    'repo_url' => $p->repo_url,
                    'demo_url' => $p->demo_url,
                    'order' => $p->order,
                    'skills' => $p->skills->map(function ($s) {
                        return [
                            'id' => $s->id,
                            'name' => $s->name,
                            'category' => $s->category,
                            'level' => $s->level,
                        ];
                    })->values(),
                ];
            })->values(),
            'experiences' => $user->experiences->map(function ($e) {
                return [
                    'id' => $e->id,
                    'company' => $e->company,
                    'role' => $e->role,
                    'description' => $e->description,
                    'started_at' => $e->started_at,
                    'ended_at' => $e->ended_at,
                    'is_current' => $e->is_current,
                    'order' => $e->order,
                ];
            })->values(),
            'educations' => $user->educations->map(function ($ed) {
                return [
                    'id' => $ed->id,
                    'school' => $ed->school,
                    'degree' => $ed->degree,
                    'field' => $ed->field,
                    'description' => $ed->description,
                    'started_at' => $ed->started_at,
                    'ended_at' => $ed->ended_at,
                    'order' => $ed->order,
                ];
            })->values(),
        ]);
    }
}
