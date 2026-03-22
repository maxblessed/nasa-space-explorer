import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import dayjs from 'dayjs'
import type { ApodResponse } from '../../features/apod/types/types'

interface ModalProps {
  item: ApodResponse | null
  setItem: (item: ApodResponse | null) => void
}

export default function Modal({ item, setItem }: ModalProps) {
  return (
    <Dialog open={!!item} onClose={() => setItem(null)} maxWidth='md' fullWidth>
      {item && (
        <>
          <DialogTitle sx={{ pr: 6 }}>
            <Typography
              variant='h6'
              fontWeight={700}
              sx={{ color: 'text.primary', mb: 1 }}
            >
              {item.title}
            </Typography>
            <IconButton
              onClick={() => setItem(null)}
              sx={{ position: 'absolute', right: 8, top: 8 }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent dividers>
            {item.media_type === 'image' ? (
              <Box
                component='img'
                src={item.url}
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  mb: 2,
                  height: 400,
                  objectFit: 'cover',
                }}
              />
            ) : (
              <iframe
                src={item.url}
                width='100%'
                height='400'
                style={{ borderRadius: 8 }}
              />
            )}

            <Typography
              variant='caption'
              sx={{ color: 'text.secondary', display: 'block', mb: 2 }}
            >
              {dayjs(item.date).format('MMM D, YYYY')}
            </Typography>

            <Typography
              variant='body2'
              sx={{
                color: 'text.primary',
                lineHeight: 1.8,
                letterSpacing: 0.2,
              }}
            >
              {item.explanation}
            </Typography>
          </DialogContent>
        </>
      )}
    </Dialog>
  )
}
