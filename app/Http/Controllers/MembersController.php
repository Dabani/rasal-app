<?php

namespace App\Http\Controllers;

use App\Models\Member;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class MembersController extends Controller
{
    // Get Member List from database

    public function getMembersList()
    {
        try {
            $members = Member::orderBy('id','DESC')->get();
            return response()->json($members);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    /**
     * Get individual member details from database
     */

    public function getMemberDetails(Request $request)
    {
        try {
            $memberData = Member::findOrFail($request->get('memberId'));
            return response()->json($memberData);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

}
