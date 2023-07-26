/* eslint-disable react/prop-types */
import { TabField } from './tab.style';
import { useTranslation } from 'next-i18next';

function Tab({ selectButton, selectedButton }) {
    const { t } = useTranslation();

    return (
        <TabField>
            <div className='button-container'>
                <div className='buttons'>
                    <button onClick={() => selectButton('uploaded')} className={selectedButton === 'uploaded' && 'selected-button'}>
                        {t('Uploaded videos')}
                    </button>
                    <button onClick={() => selectButton('waiting')} className={selectedButton === 'waiting' && 'selected-button'}>
                        {t('Videos pending approval')}
                    </button>
                </div>
            </div>
        </TabField>
    );
}

export default Tab;
