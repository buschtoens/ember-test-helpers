import isFormControl from './-is-form-control';
import { isDocument } from './-target';

const FOCUSABLE_TAGS = ['A'];

type FocusableElement = HTMLAnchorElement;

// eslint-disable-next-line require-jsdoc
function isFocusableElement(
  element: HTMLElement | SVGElement | Element
): element is FocusableElement {
  return FOCUSABLE_TAGS.indexOf(element.tagName) > -1;
}

/**
  @private
  @param {Element} element the element to check
  @returns {boolean} `true` when the element is focusable, `false` otherwise
*/
export default function isFocusable(
  element: HTMLElement | SVGElement | Element | Document
): element is HTMLElement | SVGElement {
  if (isDocument(element)) {
    return false;
  }

  if (
    isFormControl(element) ||
    (element as HTMLElement).isContentEditable ||
    isFocusableElement(element)
  ) {
    return true;
  }

  return element.hasAttribute('tabindex');
}
