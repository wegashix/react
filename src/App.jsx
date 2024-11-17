import Button from './components/Button/Button'
import CardButton from './components/CardButton/CardButton'
import JournalItem from './components/JournalItem/JournalItem'

function App() {

    const data = [
        {
            title: 'Подготовка к обновлению курсов',
            text: 'Сегодня провёл весь день за...',
            date: '31.12.2025'
        }
        {
            title: 'Поход в годы',
            text: 'Думал, что очень много време...',
            date: '21.06.2025'
        }
        {
            title: 'Первая заметка',
            text: 'Создал первую заметку, чтобы ...',
            date: '11.04.2025'
        }
    ]

    return (
        <>
            <CardButton>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 4.96265V16.6293" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.16669 10.796H15.8334" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Новое воспоминание

            </CardButton>

            <CardButton class={"card-journal"}>

                <JournalItem title={data[0].title} text={data[0].text} date={data[0].date}/>

            </CardButton>
            <CardButton class={"card-journal"}>

                <JournalItem title={data[1].title} text={data[1].text} date={data[1].date}/>

            </CardButton>
            <CardButton class={"card-journal"}>

                <JournalItem title={data[3].title} text={data[2].text} date={data[2].date}/>

            </CardButton>

            <Button />
        </>
    )
}

export default App