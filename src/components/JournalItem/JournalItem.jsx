import './JournalItem.css'

export default function JournalItem() {
    return(
        <>
            <h2 className='journal-iItem_header'>{title}</h2>
            <div className='journal-iItem_body'>
                <p className='journal-iItem_date'>{date}</p>
                <p className='journal-iItem_text'>{text}</p>
            </div>
        </>
    )
}