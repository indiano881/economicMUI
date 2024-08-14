import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import TimelineIcon from '@mui/icons-material/Timeline';
import HomeIcon from '@mui/icons-material/Home';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer({ setPage, page }: any) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handlePage = (page: string) => {
    setPage(page);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: '#3A6C9C' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 6,
              display: 'flex',
              fontFamily: 'monospace',
              letterSpacing: '.2rem',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ECONOMIC MUI
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ backgroundColor: '#3A6C9C' }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon style={{ color: 'white' }} />
            ) : (
              <ChevronLeftIcon style={{ color: 'white' }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ backgroundColor: '#3A6C9C', height: '100%' }}>
          {['Home', 'Inflation', 'Currencies'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block', color: 'white' }} onClick={() => handlePage(text)}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index === 0 ? (
                    <HomeIcon style={{ color: 'white' }} />
                  ) : index === 1 ? (
                    <TimelineIcon style={{ color: 'white' }} />
                  ) : (
                    <CurrencyExchangeIcon style={{ color: 'white' }} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {page==="Home" && <>
          <Typography paragraph variant="h6">
          ECONOMIC MUI is a portal that has the goal to show relevant economic data, with a deeper focus on USA and Sweden!
        </Typography>
        </>}
        {page==="Inflation" && <>
          <Typography paragraph variant="h6">
          The Consumer Price Index (CPI) measures the average change in prices paid by consumers for goods and services over time. It tracks inflation by comparing the current cost of a fixed basket of items to the cost in a base year. Governments and economists use CPI to assess cost of living, adjust wages, and set monetary policy. A rising CPI indicates increasing prices, while a falling CPI signals decreasing prices.
        </Typography>
        </>}
        {page==="Currencies" && <>
          <Typography paragraph variant="h6">
          An exchange rate between two currencies is the value at which one currency can be exchanged for another. It determines how much of one currency you receive when converting to another, influencing international trade, investment, and travel costs. Rates fluctuate based on economic conditions and market demand.
        </Typography>
        </>}
      </Box>
    </Box>
  );
}
