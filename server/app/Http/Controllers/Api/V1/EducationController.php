<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Education;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EducationController extends Controller
{
    public function indexByUser(User $user): JsonResponse
    {
        $educations = Education::query()
            ->where('user_id', $user->id)
            ->orderBy('order')
            ->get();

        return response()->json($educations);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'user_id' => ['required', 'integer', 'exists:users,id'],
            'school' => ['required', 'string', 'max:255'],
            'degree' => ['nullable', 'string', 'max:255'],
            'field' => ['nullable', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'started_at' => ['nullable', 'date'],
            'ended_at' => ['nullable', 'date'],
            'order' => ['sometimes', 'integer', 'min:0'],
        ]);

        $education = Education::create($data);

        return response()->json($education, 201);
    }

    public function update(Request $request, Education $education): JsonResponse
    {
        $data = $request->validate([
            'school' => ['sometimes', 'string', 'max:255'],
            'degree' => ['nullable', 'string', 'max:255'],
            'field' => ['nullable', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'started_at' => ['nullable', 'date'],
            'ended_at' => ['nullable', 'date'],
            'order' => ['sometimes', 'integer', 'min:0'],
        ]);

        $education->update($data);

        return response()->json($education);
    }

    public function destroy(Education $education): JsonResponse
    {
        $education->delete();
        return response()->json(['deleted' => true]);
    }
}
