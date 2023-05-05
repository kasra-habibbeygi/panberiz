// Component
import CategoryList from '@/components/pages/category/list';
import AddCategory from '@/components/pages/category/add';
import LayoutProvider from '@/components/layout';

const Category = () => {
    return (
        <LayoutProvider>
            <AddCategory />
            <CategoryList />
        </LayoutProvider>
    );
};

export default Category;
