import _Vue from "vue";
import IconUploadOutline from "./icon-upload-outline.vue";
import IconTrashOutline from "./icon-trash-outline.vue";
import IconTrashAltOutline from "./icon-trash-alt-outline.vue";
import IconToggleONOutline from "./icon-toggleON-outline.vue";
import IconToggleOFFOutline from "./icon-toggleOFF-outline.vue";
import IconSquareOutline from "./icon-square-outline.vue";
import IconSlashOutline from "./icon-slash-outline.vue";
import IconSettingsOutline from "./icon-settings-outline.vue";
import IconSettingsAltOutline from "./icon-settings-alt-outline.vue";
import IconSendAltOutline from "./icon-send-alt-outline.vue";
import IconSearchOutline from "./icon-search-outline.vue";
import IconScissorsOutline from "./icon-scissors-outline.vue";
import IconSaveOutline from "./icon-save-outline.vue";
import IconRadioONOutline from "./icon-radioON-outline.vue";
import IconPlusSquareOutline from "./icon-plus-square-outline.vue";
import IconPlusOutline from "./icon-plus-outline.vue";
import IconPlusCircleOutline from "./icon-plus-circle-outline.vue";
import IconPencilOutline from "./icon-pencil-outline.vue";
import IconOptionsOutline from "./icon-options-outline.vue";
import IconOptions2Outline from "./icon-options-2-outline.vue";
import IconMoreVerticalOutline from "./icon-more-vertical-outline.vue";
import IconMoreHorizontalOutline from "./icon-more-horizontal-outline.vue";
import IconMinusSquareOutline from "./icon-minus-square-outline.vue";
import IconMinusOutline from "./icon-minus-outline.vue";
import IconMinusCircleOutline from "./icon-minus-circle-outline.vue";
import IconMicOnOutline from "./icon-mic-on-outline.vue";
import IconMicOffOutline from "./icon-mic-off-outline.vue";
import IconLogOutOutline from "./icon-log-out-outline.vue";
import IconLogInOutline from "./icon-log-in-outline.vue";
import IconLinkOutline from "./icon-link-outline.vue";
import IconLinkDiagOutline from "./icon-link-diag-outline.vue";
import IconFunnelOutline from "./icon-funnel-outline.vue";
import IconFolderRemoveOutline from "./icon-folder-remove-outline.vue";
import IconFolderOutline from "./icon-folder-outline.vue";
import IconFolderAddOutline from "./icon-folder-add-outline.vue";
import IconEyeViewOnOutline from "./icon-eye-view-on-outline.vue";
import IconEyeViewOffOutline from "./icon-eye-view-off-outline.vue";
import IconEyeShutOutline from "./icon-eye-shut-outline.vue";
import IconExternalLinkOutline from "./icon-external-link-outline.vue";
import IconEditOutline from "./icon-edit-outline.vue";
import IconDownloadOutline from "./icon-download-outline.vue";
import IconColorPickerOutline from "./icon-color-picker-outline.vue";
import IconCloseThinOutline from "./icon-close-thin-outline.vue";
import IconCloseCircleOutline from "./icon-close-circle-outline.vue";
import IconCloseCircleOutline1 from "./icon-close-circle-outline-1.vue";
import IconCheckmarkSquareOutline from "./icon-checkmark-square-outline.vue";
import IconCheckmarkSquare2Outline from "./icon-checkmark-square-2-outline.vue";
import IconCheckmarkOutline from "./icon-checkmark-outline.vue";
import IconCheckCircleOutline from "./icon-check-circle-outline.vue";
import IconCheckCircleAltOutline from "./icon-check-circle-alt-outline.vue";
import IconChatMsgSquareOutline from "./icon-chat-msg-square-outline.vue";
import IconBrushOutline from "./icon-brush-outline.vue";
import IconBookmarkOutline from "./icon-bookmark-outline.vue";
import IconBackspaceOutline from "./icon-backspace-outline.vue";
import IconAttachOutline from "./icon-attach-outline.vue";
import IconAttach2Outline from "./icon-attach-2-outline.vue";
import IconAllDoneViewedOutline from "./icon-allDone-viewed-outline.vue";
const components: Record<string, any> = {
  IconUploadOutline,
  IconTrashOutline,
  IconTrashAltOutline,
  IconToggleONOutline,
  IconToggleOFFOutline,
  IconSquareOutline,
  IconSlashOutline,
  IconSettingsOutline,
  IconSettingsAltOutline,
  IconSendAltOutline,
  IconSearchOutline,
  IconScissorsOutline,
  IconSaveOutline,
  IconRadioONOutline,
  IconPlusSquareOutline,
  IconPlusOutline,
  IconPlusCircleOutline,
  IconPencilOutline,
  IconOptionsOutline,
  IconOptions2Outline,
  IconMoreVerticalOutline,
  IconMoreHorizontalOutline,
  IconMinusSquareOutline,
  IconMinusOutline,
  IconMinusCircleOutline,
  IconMicOnOutline,
  IconMicOffOutline,
  IconLogOutOutline,
  IconLogInOutline,
  IconLinkOutline,
  IconLinkDiagOutline,
  IconFunnelOutline,
  IconFolderRemoveOutline,
  IconFolderOutline,
  IconFolderAddOutline,
  IconEyeViewOnOutline,
  IconEyeViewOffOutline,
  IconEyeShutOutline,
  IconExternalLinkOutline,
  IconEditOutline,
  IconDownloadOutline,
  IconColorPickerOutline,
  IconCloseThinOutline,
  IconCloseCircleOutline,
  IconCloseCircleOutline1,
  IconCheckmarkSquareOutline,
  IconCheckmarkSquare2Outline,
  IconCheckmarkOutline,
  IconCheckCircleOutline,
  IconCheckCircleAltOutline,
  IconChatMsgSquareOutline,
  IconBrushOutline,
  IconBookmarkOutline,
  IconBackspaceOutline,
  IconAttachOutline,
  IconAttach2Outline,
  IconAllDoneViewedOutline,
};

const Icon = {
  install: (Vue: typeof _Vue): void => {
    for (const key in components) {
      const component = components[key];
      Vue.component(key, component);
    }
  },
};
_Vue.use(Icon);

export default components;
