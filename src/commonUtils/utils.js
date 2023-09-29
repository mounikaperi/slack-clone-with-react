import InsertCommentIcon from '@mui/icons-material/InsertComment';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import GroupIcon from '@mui/icons-material/Group';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SortIcon from '@mui/icons-material/Sort';
import ForumIcon from '@mui/icons-material/Forum';
import DraftsIcon from '@mui/icons-material/Drafts';

const menuItems = () => {
  return [
    {
      title: 'Channels',
      url: '/channels',
      submenu: [
        {
          title: 'Create',
          url: 'create',
          submenu: [
            {
              title: 'Create Channel',
              url: 'create-channel'
            },
            {
              title: 'Manage Section',
              url: 'manage-section'
            }
          ]
        },
        {
          title: 'Manage',
          url: 'manages',
          submenu: [
            {
              title: 'Manage section',
              url: 'create-channel'
            },
            {
              title: 'Manage All Channels',
              url: 'manage-section'
            }
          ]
        },
        {
          title: 'Show and Sort',
          url: 'showsort',
          submenu: [
            {
              title: 'Show All Channels',
              url: 'create-channel'
            },
            {
              title: 'Sort Alphabetically',
              url: 'manage-section'
            }
          ]
        }
      ]
    }
  ];
};

export const getSidebarFixedOptions = () => {
  return [
    {
      Icon: InsertCommentIcon,
      title: "Threads"
    },
    {
      Icon: SortIcon,
      title: "Unreads"
    },
    {
      Icon: ForumIcon,
      title: "Direct Messages"
    },
    {
      Icon: AlternateEmailOutlinedIcon,
      title: "Mentions & reactions"
    },
    {
      Icon: BookmarkBorderIcon,
      title:"Later"
    },
    {
      Icon: ManageSearchIcon,
      title:"All Channels"
    },
    {
      Icon: GroupIcon,
      title: "People & User groups"
    },
    {
      Icon: DraftsIcon,
      title: "Drafts & sent"
    },
    {
      Icon: AppsIcon,
      title: "Apps"
    },
    {
      Icon: FileCopyIcon,
      title: "Files"
    },
    {
      Icon: MoreVertIcon,
      title: "Show less"
    }
  ]
};

export default menuItems;