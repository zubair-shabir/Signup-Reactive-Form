import { FormGroup } from "@angular/forms";



export function PasswordChecker(controlName: string, CompareControlName: string){
    return (formGroup : FormGroup)=> {
        const password = formGroup.controls[controlName];
        const Conpassword = formGroup.controls[CompareControlName];

        if(password.value !== Conpassword.value){
            console.log("wrong passowrd")
            Conpassword.setErrors({ mustmatch : true})
        }else{
            Conpassword.setErrors(null);
        }
    }
}