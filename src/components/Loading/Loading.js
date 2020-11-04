import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

const Loading = () => {
	return (
		<div>
			<Segment>
				<Dimmer active>
					<Loader size='small'>Loading</Loader>
				</Dimmer>

				<Image src='/images/wireframe/short-paragraph.png' />
			</Segment>
		</div>
	);
};
export default Loading;
