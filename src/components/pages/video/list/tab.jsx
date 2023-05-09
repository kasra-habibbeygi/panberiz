/* eslint-disable react/prop-types */
import { TabField } from './tab.style';

function Tab({ selectButton, selectedButton }) {
    return (
        <TabField>
            <div className='button-container'>
                <div className='buttons'>
                    <button onClick={() => selectButton('uploaded')} className={selectedButton === 'uploaded' && 'selected-button'}>
                        ویدئو های آپلود شده
                    </button>
                    <button onClick={() => selectButton('waiting')} className={selectedButton === 'waiting' && 'selected-button'}>
                        ویدئو های در انتظار تایید
                    </button>
                </div>
            </div>
        </TabField>
    );
}

export default Tab;
