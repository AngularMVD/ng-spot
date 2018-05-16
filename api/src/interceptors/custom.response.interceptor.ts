import { Interceptor, InterceptorInterface, Action } from 'routing-controllers';

@Interceptor()
export class CustomResponseInterceptor implements InterceptorInterface {
    intercept(action: Action, content: any) {
       // Here youy can modify response
        return content;
    }

}
