import React, {useState} from 'react'
import Collapse from './Collapse'
import Paragraph from './Paragraph'

export default function Main() {
    const [isExpanded, setIsExpanded] = useState(false) 

    const handleExpandedChange = (event) => {
        event.preventDefault()
        setIsExpanded(prevState => !prevState)
    }

    return (
        <Collapse
            collapsedLabel='Подробнее'
            expandedLabel='Скрыть'
            isExpanded={ isExpanded }
            onExpandedChange={ handleExpandedChange }
        >
            <Paragraph>
                Альфа-Банк, основанный в 1990 году, является универсальным банком,
                осуществляющим все основные виды банковских операций, представленных
                на рынке финансовых услуг, включая обслуживание частных и корпоративных
                клиентов, инвестиционный банковский бизнес, торговое финансирование и т.д.
            </Paragraph>
        </Collapse>
    )
}
