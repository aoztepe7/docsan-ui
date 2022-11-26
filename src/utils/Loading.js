import $ from 'jquery';

export function toLoading() {
    $('#overlay').css('display', 'block');
};


export function toUnloading() {
    $('#overlay').css('display', 'none');
};