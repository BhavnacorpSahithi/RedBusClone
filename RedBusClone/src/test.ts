// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    <T>(id: string): T;
    keys(): string[];
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().forEach(context);













































//  <div id="registerModal2" class="modal-style-2 dark modal">
//   <div class="modal-dialog modal-login">
//     <div class="modal-content">
//       <div class="modal-header p-0">
//         <h4 class="modal-title">Register</h4>
//         <button
//           type="button"
//           class="close"
//           data-dismiss="modal"
//           aria-hidden="true"
//         >
//           &times;
//         </button>
//       </div>
//       <div class="modal-body">
//         <form [formGroup]="signupvalue" class="mt-3">
//           <div class="form-group">
//             <div class="input-group">
//               <span class="input-group-addon"><i class="fa fa-user"></i></span>
//               <input
//                 type="text"
//                 class="form-control"
//                 formControlName="Name"
//                 placeholder="Enter your name"
//                 required
//               />
//               <span
//                 class="text-light"
//                 *ngIf="
//                   signupvalue.controls['Name'].dirty &&
//                   signupvalue.hasError('required', 'Name')
//                 "
//                 >*Name is Required</span
//               >
//             </div>
//           </div>
//           <div class="form-group">
//             <div class="input-group">
//               <span class="input-group-addon"
//                 ><i class="fa fa-envelope"></i
//               ></span>
//               <input
//                 type="email"
//                 class="form-control"
//                 formControlName="Email"
//                 placeholder="Enter email address"
//                 required
//               />
//               <span
//                 class="text-light"
//                 *ngIf="
//                   signupvalue.controls['Email'].dirty &&
//                   signupvalue.hasError('required', 'Email')
//                 "
//                 >*Email is Required</span
//               >
//             </div>
//           </div>
//           <div class="form-group">
//             <div class="input-group">
//               <span class="input-group-addon"><i class="fa fa-phone"></i></span>
//               <input
//                 type="text"
//                 class="form-control"
//                 formControlName="Phone"
//                 placeholder=" Enter ur phone"
//                 required
//               />
//               <span
//                 class="text-light"
//                 *ngIf="
//                   signupvalue.controls['Phone'].dirty &&
//                   signupvalue.hasError('required', 'Phone')
//                 "
//                 >*Phone is Required</span
//               >
//             </div>
//           </div>
//           <div class="form-group">
//             <div class="input-group">
//               <span class="input-group-addon"><i class="fa fa-lock"></i></span>

//               <input
//                 type="password"
//                 class="form-control"
//                 formControlName="Password"
//                 placeholder="Enter password"
//                 autocomplete="on"
//                 required
//               />
//               <span
//                 class="text-light"
//                 *ngIf="
//                   signupvalue.controls['Password'].dirty &&
//                   signupvalue.hasError('required', 'Password')
//                 "
//                 >*password is Required</span
//               >
//             </div>
//           </div>

//           <div class="form-group">
//             <div class="input-group">
//               <input
//                 type="radio"
//                 value="male"
//                 formControlName="Gender"
//                 name="Gender"
//               />
//               &nbsp;&nbsp;&nbsp;&nbsp;
//               <span>Male</span>
//               &nbsp;&nbsp;&nbsp;&nbsp;
//               <input
//                 type="radio"
//                 formControlName="Gender"
//                 value="female"
//                 name="Gender"
//               />
//               &nbsp;&nbsp;&nbsp;&nbsp;
//               <span>Female</span>
//               <span
//                 class="text-light"
//                 *ngIf="
//                   signupvalue.controls['Gender'].dirty &&
//                   signupvalue.hasError('required', 'Gender')
//                 "
//                 >*Gender is Required</span
//               >
//             </div>
//           </div>

//           <div class="form-group text-center">
//             <button
//               id="signup-button"
//               type="submit"
//               class="btn btn-primary btn-sm"
//               (click)="RegisterUser()"
//             >
//               Register
//             </button>
//           </div>
//         </form>

//         <p class="hint-text">or register with</p>
//         <div class="social-login text-center mb-2">
//           <a class="btn-facebook text-uppercase" href="redirect/facebook"
//             ><i class="fab fa-facebook-f mr-2 ml-2"></i>
//           </a>
//           <a class="btn-facebook text-uppercase" href="redirect/google"
//             ><i class="fab fa-google mr-2 ml-2"></i
//           ></a>
//           <a class="btn-facebook text-uppercase" href="redirect/twitter"
//             ><i class="fab fa-twitter mr-2 ml-2"></i
//           ></a>
//         </div>
//         <div class="modal-footer">
//           Already have an account?
//           <a data-bs-toggle="modal" data-bs-target="#loginModal2"> Login </a>
         
//         </div>
//       </div>
//     </div>
//   </div>
//    SignUp Ends 
