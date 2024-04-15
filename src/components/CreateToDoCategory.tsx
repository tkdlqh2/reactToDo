import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { categoriesState } from "../atoms";

interface IForm {
    category: string;
}

export function CreateToDoCategory() {
  const [categories, setCategories] = useRecoilState(categoriesState);
const { register, handleSubmit, formState: { errors } } = useForm<IForm>(); // Update the type of handleSubmit
const handleValid = (data: IForm) => {
    const { category } = data;
    setCategories((oldCategories) => [...oldCategories, category]);
};
return (
    <form onSubmit={handleSubmit(handleValid)}>
        <input
            {...register("category", { required: "Please write a Category",})}
            placeholder="Write a category"
        />
        <button>Add</button>
        <span>{errors?.category?.message}</span>
    </form>
);
}