import { Injectable } from '@angular/core';

import Swal from 'sweetalert2';

@Injectable({
    providedIn : 'root'
})

export class AlertService {
    
    quantityExceededAlert() : Promise<any>{

        return Swal.fire({
            // text : "Quantity is 10 per customer",
            // target : "#custom-target",
            iconColor : 'orange',
            customClass : {
                // container : 'position-absolute',
                popup: 'colored-toast'
            },
            toast : true,
            position : 'top-right',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            icon: 'warning',
            title: 'Quantity is 10 per customer',
        })
    };


}