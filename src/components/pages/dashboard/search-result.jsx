/* eslint-disable react/prop-types */
import { SearchResultWrapper } from './search-result.style';
import { useTranslation } from 'next-i18next';

const SearchResult = ({ userSearchValue }) => {
    const { t } = useTranslation();

    return (
        <SearchResultWrapper>
            <p className='title'>{t('Search result')}</p>
            <div className='container'>
                <div className='item'>
                    <p className='question'>{t('Username')} : </p>
                    <p className='answer'>{userSearchValue.fullname}</p>
                </div>
                <div className='item'>
                    <p className='question'>{t('Seen videos count')} : </p>
                    <p className='answer'>نعت چاپ، و با استفاده از طراحان گرافیک است، </p>
                </div>
                <div className='item'>
                    <p className='question'>{t('Tests')} : </p>
                    <ul>
                        <li>آزمون ۱</li>
                        <li>آزمون ۲</li>
                        <li>آزمون ۳</li>
                        <li>آزمون ۴</li>
                    </ul>
                </div>
            </div>
        </SearchResultWrapper>
    );
};

export default SearchResult;
