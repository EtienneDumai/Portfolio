<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\PortfolioController;
use App\Http\Controllers\Api\V1\ProjectController;
use App\Http\Controllers\Api\V1\SkillController;
use App\Http\Controllers\Api\V1\EducationController;
use App\Http\Controllers\Api\V1\ExperienceController;

Route::prefix('v1')->group(function () {

    /*
    |--------------------------------------------------------------------------
    | PUBLIC - Lecture du portfolio (pour Angular)
    |--------------------------------------------------------------------------
    |
    | Exemple :
    | GET /api/v1/portfolio/1
    | GET /api/v1/projects/1
    |
    */

    Route::get('/portfolio/{user}', [PortfolioController::class, 'show']);
    Route::get('/projects/{user}', [ProjectController::class, 'indexByUser']);
    Route::get('/skills/{user}', [SkillController::class, 'indexByUser']);
    Route::get('/educations/{user}', [EducationController::class, 'indexByUser']);
    Route::get('/experiences/{user}', [ExperienceController::class, 'indexByUser']);

    /*
    |--------------------------------------------------------------------------
    | PROTECTED - CRUD (optionnel : back-office)
    |--------------------------------------------------------------------------
    |
    | Nécessite auth:sanctum (ou autre).
    | Si tu ne veux pas d’admin, supprime ce bloc.
    |
    */

    Route::middleware('auth:sanctum')->group(function () {
        // Projects
        Route::post('/projects', [ProjectController::class, 'store']);
        Route::put('/projects/{project}', [ProjectController::class, 'update']);
        Route::delete('/projects/{project}', [ProjectController::class, 'destroy']);

        // Skills
        Route::post('/skills', [SkillController::class, 'store']);
        Route::put('/skills/{skill}', [SkillController::class, 'update']);
        Route::delete('/skills/{skill}', [SkillController::class, 'destroy']);

        // Pivot project_skill (attacher/détacher des skills à un projet)
        Route::post('/projects/{project}/skills/attach', [ProjectController::class, 'attachSkills']);
        Route::post('/projects/{project}/skills/detach', [ProjectController::class, 'detachSkills']);

        // Educations
        Route::post('/educations', [EducationController::class, 'store']);
        Route::put('/educations/{education}', [EducationController::class, 'update']);
        Route::delete('/educations/{education}', [EducationController::class, 'destroy']);

        // Experiences
        Route::post('/experiences', [ExperienceController::class, 'store']);
        Route::put('/experiences/{experience}', [ExperienceController::class, 'update']);
        Route::delete('/experiences/{experience}', [ExperienceController::class, 'destroy']);
    });
});
