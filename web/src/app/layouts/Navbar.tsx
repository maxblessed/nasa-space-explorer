import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../shared/components/Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <AppBar
        position='absolute'
        elevation={0}
        sx={{ background: 'transparent' }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography color={'text.primary'}>
            <Logo />
          </Typography>

          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon sx={{ color: 'text.primary' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 250 }}>
          {[
            { label: 'Home', path: '/' },
            { label: 'Gallery', path: '/gallery' },
            { label: 'Dashboard', path: '/dashboard' },
          ].map((item) => (
            <ListItemButton
              key={item.label}
              onClick={() => {
                navigate(item.path)
                setOpen(false)
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  )
}
