import { SearchResultWrapper } from './search-result.style';

const SearchResult = () => {
    return (
        <SearchResultWrapper>
            <p className='title'>نتیجه ی جست و جو</p>
            <div className='container'>
                <div className='item'>
                    <p className='question'>نام کاربر : </p>
                    <p className='answer'>علی ازقندی</p>
                </div>
                <div className='item'>
                    <p className='question'>تعداد ویدیو های دیده : </p>
                    <p className='answer'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                    </p>
                </div>
                <div className='item'>
                    <p className='question'>نام کاربر : </p>
                    <p className='answer'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                    </p>
                </div>
                <div className='item'>
                    <p className='question'>تعداد ویدیو های دیده : </p>
                    <p className='answer'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                    </p>
                </div>
            </div>
        </SearchResultWrapper>
    );
};

export default SearchResult;
