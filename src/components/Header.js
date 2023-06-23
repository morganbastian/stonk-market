import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export default function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						Stonk Market
					</Typography>
					<Avatar
						sx={{ width: 56, height: 56 }}
						alt='wsb guy'
						src='https://ih1.redbubble.net/image.378733656.0934/st,small,507x507-pad,600x600,f8f8f8.u4.jpg'
					/>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
