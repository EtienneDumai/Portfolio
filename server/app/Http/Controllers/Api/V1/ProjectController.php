<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ProjectController extends Controller
{
    public function indexByUser(User $user): JsonResponse
    {
        $projects = Project::query()
            ->where('user_id', $user->id)
            ->where('is_public', true)
            ->with('skills')
            ->orderBy('order')
            ->get();

        return response()->json($projects);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'user_id' => ['required', 'integer', 'exists:users,id'],
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'repo_url' => ['nullable', 'string', 'max:255'],
            'demo_url' => ['nullable', 'string', 'max:255'],
            'is_public' => ['sometimes', 'boolean'],
            'order' => ['sometimes', 'integer', 'min:0'],
        ]);

        $project = Project::create($data);

        return response()->json($project->load('skills'), 201);
    }

    public function update(Request $request, Project $project): JsonResponse
    {
        $data = $request->validate([
            'title' => ['sometimes', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'repo_url' => ['nullable', 'string', 'max:255'],
            'demo_url' => ['nullable', 'string', 'max:255'],
            'is_public' => ['sometimes', 'boolean'],
            'order' => ['sometimes', 'integer', 'min:0'],
        ]);

        $project->update($data);

        return response()->json($project->load('skills'));
    }

    public function destroy(Project $project): JsonResponse
    {
        $project->delete();
        return response()->json(['deleted' => true]);
    }

    /**
     * Attache des skills à un projet.
     * Body: { "skill_ids": [1,2,3] }
     */
    public function attachSkills(Request $request, Project $project): JsonResponse
    {
        $data = $request->validate([
            'skill_ids' => ['required', 'array', 'min:1'],
            'skill_ids.*' => ['integer', 'exists:skills,id'],
        ]);

        $project->skills()->syncWithoutDetaching($data['skill_ids']);

        return response()->json($project->load('skills'));
    }

    /**
     * Détache des skills d’un projet.
     * Body: { "skill_ids": [1,2] }
     */
    public function detachSkills(Request $request, Project $project): JsonResponse
    {
        $data = $request->validate([
            'skill_ids' => ['required', 'array', 'min:1'],
            'skill_ids.*' => ['integer', 'exists:skills,id'],
        ]);

        $project->skills()->detach($data['skill_ids']);

        return response()->json($project->load('skills'));
    }
}
