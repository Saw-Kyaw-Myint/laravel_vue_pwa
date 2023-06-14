<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::latest('id')->get();
        return response()->json($posts);
    }

    public function store(StorePostRequest $request)
    {
        info($request->title);

        Post::create([
            'title' => $request->title,
            'description' => $request->description,
        ]);

        return response()->json([
            'message' => 'New post is created',
        ]);
    }

    public function edit($id)
    {
        $post = Post::findOrFail($id);
        return response()->json($post);
    }

    public function update(UpdatePostRequest $request, $id)
    {
        Post::findOrFail($id)->update([
            'title' => $request->title,
            'description' => $request->description,
        ]);

        return response()->json([
            'message' => 'Post is updated',
        ]);

    }

    public function destroy($id)
    {
        Post::findOrFail($id);
        return response()->json([
            'message' => 'post is deleted',
        ]);
    }
}
