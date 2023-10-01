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
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicRoundedIcon from '@mui/icons-material/FormatItalicRounded';
import StrikethroughSRoundedIcon from '@mui/icons-material/StrikethroughSRounded';
import LinkIcon from '@mui/icons-material/Link';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SubjectIcon from '@mui/icons-material/Subject';
import CodeIcon from '@mui/icons-material/Code';
import DeveloperModeTwoToneIcon from '@mui/icons-material/DeveloperModeTwoTone';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideocamIcon from '@mui/icons-material/Videocam';

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

export const getChatInputHeaderOptions = () => {
  return [
    {
      title: "Bold",
      keys: ["Ctrl", "B"],
      Icon: FormatBoldIcon
    },
    {
      title: "Italic",
      keys: ["Ctrl", "I"],
      Icon: FormatItalicRoundedIcon
    },
    {
      title: "Strikethrough",
      keys: ["Ctrl", "Shift", "X"],
      Icon: StrikethroughSRoundedIcon
    },
    {
      title: "Link",
      keys: ["Ctrl", "Shift", "U"],
      Icon: LinkIcon
    },
    {
      title: "Ordered List",
      keys: ["Ctrl", "Shift", "7"],
      Icon: FormatListNumberedIcon
    },
    {
      title: "Bulleted List",
      keys: ["Ctrl", "Shift", "8"],
      Icon: FormatListBulletedIcon
    },
    {
      title: "Blockquote",
      keys: ["Ctrl", "Shift", "9"],
      Icon: SubjectIcon
    },
    {
      title: "Code",
      keys: ["Ctrl", "Shift", "C"],
      Icon: CodeIcon
    },
    {
      title: "Code Block",
      keys: ["Ctrl", "Alt", "Shift", "C"],
      Icon: DeveloperModeTwoToneIcon
    }
  ]
};

export const getChatInputFooterOptions = () => {
  return [
    {
      title: "Attachments",
      Icon: AddCircleIcon
    },
    {
      title: "Hide Formatting",
      Icon: FormatColorTextIcon
    },
    {
      title: "Emoji",
      Icon: SentimentSatisfiedAltIcon
    },
    {
      title: "Mention Someone",
      Icon: AlternateEmailIcon
    },
    {
      title: "Record video clip",
      Icon: VideocamIcon
    },
    {
      title: "Record audio clip",
      Icon: KeyboardVoiceIcon
    }
  ]
}

export default menuItems;