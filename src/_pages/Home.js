import React from "react";
import { useEffect } from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Snackbar from "@material-ui/core/Snackbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import Switch from "@material-ui/core/Switch";
import Slide from "@material-ui/core/Slide";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CancelIcon from "@material-ui/icons/Cancel";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import CloseIcon from "@material-ui/icons/Close";
import SaveOutlinedIcon from "@material-ui/icons/SaveOutlined";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Menu from "@material-ui/core/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import LinearProgress from "@material-ui/core/LinearProgress";

const apiUrl = "https://localhost:5001/api/";

const GetContact = (UsersId) => {
  return axios
    .get(`${apiUrl}Agenda/GetContact/${UsersId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

const DeleteContact = (id) => {
  return axios
    .delete(`${apiUrl}Agenda/DeleteContact/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root3: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  root2: {
    height: 180,

    position: "fixed",
    top: 80,
  },
  wrapper: {
    width: 100 + theme.spacing(2),
  },
  paper2: {
    zIndex: 1,
    position: "relative",
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
  "@global": {
    body: {
      backgroundColor: theme.palette.background.paper,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  snackbar: {
    [theme.breakpoints.down("xs")]: {
      bottom: 90,
    },
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));

const options = ["None", "Atria", "Callisto", "Dione", "Ganymede", "Umbriel"];
const ITEM_HEIGHT = 48;

export default function FabIntegrationSnackbar() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [openSnackbar, setSnackbar] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [chipData, setChipData] = React.useState([]);
  const [homeData, setHomeData] = React.useState([]);
  const [CellNumber, setCellNumber] = React.useState("");
  const [HomeNumber, setHomeNumber] = React.useState("");
  const [expanded, setExpanded] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [contacts, setContact] = React.useState([]);
  const [idToDeleteContact, setIdToDeleteContact] = React.useState([]);

  const initalState = {
    Numbers: [{ Number: "", Type: "", ContactsId: 0 }],
    Name: "",
    Address: "",
    Email: "",
    GroupBelongs: "",
    UsersId: 0,
  };

  const [state, setState] = React.useState(initalState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    getContactApi();
  }, []);

  const getContactApi = () => {
    setLoading(true);
    GetContact(2)
      .then((data) => {
        console.log(data);
        setContact(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteContactApi = (id) => {
    DeleteContact(id)
      .then(() => {
        console.log("sssss");
        getContactApi();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const handleDeleteHomeData = (chipToDelete) => () => {
    setHomeData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const handleAddCellNumber = () => {
    setChipData([
      { key: Math.floor(Math.random() * 100000), label: CellNumber },
      ...chipData,
    ]);
  };

  const handleAddHomeNumber = () => {
    setHomeData([
      { key: Math.floor(Math.random() * 100000), label: HomeNumber },
      ...homeData,
    ]);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange2 = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClickOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const handleChange = () => {};

  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <div className={classes.root}>
          <AppBar position="fixed">
            <Toolbar style={{ paddingLeft: 0 }}>
              <div>
                <IconButton
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "20ch",
                    },
                  }}
                  style={{ color: "white" }}
                >
                  {options.map((option) => (
                    <MenuItem
                      key={option}
                      selected={option === "Pyxis"}
                      onClick={handleClose}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
              <Typography className={classes.title} variant="h6" noWrap>
                Material-UI
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Toolbar>
            {loading && (
              <LinearProgress
                color="secondary"
                style={{ position: "relative" }}
              />
            )}
          </AppBar>
        </div>

        {contacts[0] && (
          <div className={classes.root3} style={{ padding: 10, marginTop: 64 }}>
            {contacts.map((contact) => {
              let plural = 0;
              let plural2 = 0;
              let tel = false;
              let cel = false;
              return (
                <Accordion
                  key={contact.id}
                  expanded={expanded === "panel" + contact.id}
                  onChange={handleChange2("panel" + contact.id)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.heading}>
                      {contact.name}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div>
                        {contact.numbers[0] && (
                          <div>
                            <Typography>
                              <span
                                style={{
                                  display: "flex",
                                  flexDirection: "row-reverse",
                                  justifyContent: "flex-end",
                                }}
                              >
                                <span>
                                  {contact.numbers.map((number) => {
                                    if (number.numberType === "Celular") {
                                      cel = true;
                                      plural++;
                                      return (
                                        <span
                                          key={number.id}
                                          style={{ display: "inline-block" }}
                                        >
                                          <b>&nbsp;&nbsp;{number.number}</b>
                                        </span>
                                      );
                                    } else return null;
                                  })}
                                </span>
                                {cel && (
                                  <span>
                                    Celular{plural === 2 && <span>es</span>}:
                                  </span>
                                )}
                              </span>
                            </Typography>
                            {cel && <br />}
                          </div>
                        )}

                        {contact.numbers[0] && (
                          <div>
                            <Typography>
                              <span
                                style={{
                                  display: "flex",
                                  flexDirection: "row-reverse",
                                  justifyContent: "flex-end",
                                }}
                              >
                                <span>
                                  {contact.numbers.map((number) => {
                                    if (number.numberType === "Telefono") {
                                      plural2++;
                                      tel = true;
                                      return (
                                        <span
                                          key={number.id}
                                          style={{ display: "inline-block" }}
                                        >
                                          <b>&nbsp;&nbsp;{number.number}</b>
                                        </span>
                                      );
                                    } else return null;
                                  })}
                                </span>
                                {tel && (
                                  <span>
                                    Telefono{plural2 >= 2 && <span>s</span>}:
                                  </span>
                                )}
                              </span>
                            </Typography>

                            {tel && <br />}
                          </div>
                        )}
                        <Typography>
                          Direccion: <b>{contact.address}</b>
                        </Typography>
                        <Typography>
                          <br />
                          Correo: <b>{contact.email}</b>
                        </Typography>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "90vw",
                          flexDirection: "row-reverse",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row-reverse",
                          }}
                        >
                          <Button
                            color="secondary"
                            onClick={() => {
                              handleClickOpenAlert();
                              setIdToDeleteContact(contact.id);
                            }}
                            style={{
                              margin: "10px 5px 0 5px",
                              background: "#E8E8E8",
                            }}
                          >
                            <DeleteIcon></DeleteIcon>
                          </Button>
                          <Button
                            color="primary"
                            onClick={() => {
                              setChecked((prev) => !prev);
                              setSnackbar((x) => !x);
                            }}
                            style={{
                              margin: "10px 5px 0 5px",
                              background: "#E8E8E8",
                            }}
                          >
                            <EditIcon></EditIcon>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </div>
        )}

        {!checked && (
          <Fab
            color="secondary"
            onClick={() => setChecked((prev) => !prev)}
            className={classes.fab}
          >
            <AddIcon />
          </Fab>
        )}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          message="Archived"
          action={
            <Button color="inherit" size="small">
              Undo
            </Button>
          }
          className={classes.snackbar}
        />
      </div>

      {checked && (
        <div
          style={{
            height: "100%",
            position: "fixed",
            top: 40,
            zIndex: checked === true ? "1" : "-1",
            background: "#E8E8E8",
          }}
        >
          <div className={classes.wrapper} style={{ width: "100vw" }}>
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
              <Paper elevation={4} className={classes.paper2}>
                <form noValidate autoComplete="off">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: 30,
                      padding: 10,
                    }}
                  >
                    <Typography
                      style={{ padding: "10px 0 10px 10px", fontSize: 20 }}
                    >
                      Crear contacto
                    </Typography>
                    <TextField
                      style={{ marginBottom: 5 }}
                      label="Nombre"
                      variant="filled"
                    />

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginBottom: 5,
                      }}
                    >
                      {chipData.map((data) => {
                        return (
                          <Box key={data.key}>
                            <Chip
                              label={data.label}
                              onDelete={
                                data.label === "React"
                                  ? undefined
                                  : handleDelete(data)
                              }
                              className={classes.chip}
                            />
                          </Box>
                        );
                      })}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextField
                        style={{ marginBottom: 5, width: "82%" }}
                        label="Numero de celular"
                        variant="filled"
                        onChange={(e) => {
                          setCellNumber(e.target.value);
                        }}
                      />
                      <Fab
                        onClick={() => {
                          handleAddCellNumber();
                        }}
                        color="primary"
                      >
                        <AddIcon />
                      </Fab>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginBottom: 5,
                      }}
                    >
                      {homeData.map((data) => {
                        return (
                          <Box key={data.key}>
                            <Chip
                              label={data.label}
                              onDelete={
                                data.label === "React"
                                  ? undefined
                                  : handleDeleteHomeData(data)
                              }
                              className={classes.chip}
                            />
                          </Box>
                        );
                      })}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextField
                        style={{ marginBottom: 5, width: "82%" }}
                        label="Numero de casa"
                        variant="filled"
                        onChange={(e) => {
                          setHomeNumber(e.target.value);
                        }}
                      />
                      <Fab
                        onClick={() => {
                          handleAddHomeNumber();
                        }}
                        color="primary"
                      >
                        <AddIcon />
                      </Fab>
                    </div>

                    <TextField
                      style={{ marginBottom: 5 }}
                      label="Email"
                      variant="filled"
                      onChange={(e) => {
                        handleChangeText(e.target.value, "Email");
                      }}
                    />

                    <FormControl
                      variant="filled"
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                        Grupo
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>

                    <div
                      style={{ display: "flex", flexDirection: "row-reverse" }}
                    >
                      <Button
                        color="secondary"
                        onClick={() => setChecked((prev) => !prev)}
                        style={{
                          margin: "10px 5px 0 5px",
                          background: "#E8E8E8",
                        }}
                      >
                        <CloseIcon></CloseIcon>
                      </Button>
                      <Button
                        color="primary"
                        onClick={() => {
                          setChecked((prev) => !prev);
                          setSnackbar((x) => !x);
                        }}
                        style={{
                          margin: "10px 5px 0 5px",
                          background: "#E8E8E8",
                        }}
                      >
                        <SaveOutlinedIcon></SaveOutlinedIcon>
                      </Button>
                    </div>
                  </div>
                </form>
              </Paper>
            </Slide>
          </div>
        </div>
      )}
      <div>
        <Dialog
          open={openAlert}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCloseAlert}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Eliminar contacto"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Estas seguro que deseas eliminar contacto.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAlert} color="primary">
              Cancelar
            </Button>
            <Button
              onClick={() => {
                handleCloseAlert();
                deleteContactApi(idToDeleteContact);
              }}
              color="primary"
            >
              Aceptar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </React.Fragment>
  );
}
