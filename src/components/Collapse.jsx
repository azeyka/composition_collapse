import React from 'react'
import PropTypes from 'prop-types'

function Collapse(props) {

    return (
        <div className={props.isExpanded ? "collapse_block collapsed" : "collapse_block expanded" }>
            <div className={props.isExpanded ? 'collapse_content hidden' : 'collapse_content'}>
                {props.children}
            </div>

            <a onClick={props.onExpandedChange} href="no.link">
                {props.isExpanded ? props.collapsedLabel : props.expandedLabel}
                <i class="material-icons">
                    {props.isExpanded ? 'expand_more' : 'expand_less' }
                </i>
            </a>
        </div>
    )
}

Collapse.propTypes = {
    collapsedLabel: PropTypes.string.isRequired,
    expandedLabel: PropTypes.string.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    onExpandedChange: PropTypes.func.isRequired,
}

export default Collapse

