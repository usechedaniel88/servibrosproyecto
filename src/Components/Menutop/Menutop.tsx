
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { HashLink as Link } from 'react-router-hash-link'

const pages = [
	{
		title: 'Inicio',
		path: '/',
	},
	{
		title: 'Quienes somos',
		path: '/aboutus',
	},
    {
		title: 'Servicios',
		path: '/services',
	},
	{
		title: 'Contacto',
		path: '/contact',
	},
	// {
	// 	title: 'Contacto',
	// 	path: 'mailto: usechedaniel88@gmail.com',
	// },
]

function Navtop() {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							sx={{ color: 'white' }}
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page.title} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">
										<Link smooth to={page.path}>
											{page.title}
										</Link>
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
							justifyContent: 'center',
						}}
					>
						{pages.map((page) => (
							<Button
								key={page.title}
								onClick={handleCloseNavMenu}
								sx={{
									my: 2,
									color: 'white',
									display: 'block',
									'&:hover': {
										bgcolor: '#504d48',
									},
								}}
							>
								<Link smooth to={page.path}>
									{page.title}
								</Link>
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default Navtop