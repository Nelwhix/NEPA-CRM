<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organization_Customer extends Model
{
    use HasFactory;

    public function customer_report() {
        return $this->hasMany(Customer_Report::class);
    }
}
