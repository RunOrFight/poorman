import {Field} from "./index.ts";

const FieldsContainer = () => {
    return (
        <div className="h-full w-full flex flex-col">
            <div className="h-full w-full flex justify-center items-center">
                <Field/>
                <Field/>
                <Field/>
            </div>
            <div>
                <img src="src/assets/devider.png"/>
            </div>
           <div className="h-full w-full flex justify-center items-center">
               <Field/>
               <Field/>
               <Field/>
           </div>
        </div>
    );
};

export default FieldsContainer;