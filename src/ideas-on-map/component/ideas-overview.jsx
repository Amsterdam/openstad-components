'use strict';

import { IdeasOverview, IdeasList, IdeasFilterbar, IdeasSort } from '../../ideas-overview/index.jsx';

export default class IdeasOverview2 extends IdeasOverview {

	render() {

    let self = this;

    let ideas = typeof self.props.ideas != 'undefined' ? self.props.ideas : self.state.ideas || [];

    let titleHML = (<h3 className="osc-title">{self.props.title || self.config.title} ({ideas.length})</h3>);

    return (
			<div id={self.id} className={`osc-ideas-overview ${self.props.className || ''}`}>

        <IdeasFilterbar config={self.config} showFilterbar={self.props.showFilterbar} className="osc-ideas-filterbar"/>
        <IdeasSort config={{ ...self.config.sort }} ideas={ideas} showSort={!self.props.hideSortButton} className="osc-align-right-container" ref={el => self.sorter = el}/>

        {titleHML}

        <IdeasList config={self.config} ideas={ideas} className=""/>

			</div>
    );

  }

}



