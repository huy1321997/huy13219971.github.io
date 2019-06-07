

function myTest() {
    // alert('cccccccccccccWelcome to custom js');
}
	function addMoreEducation()
	{
		 var e = $('.education-sample').clone();
                e.removeClass('education-sample').addClass('education-row');
                e.find('form').addClass('education-form');
                e.find('.datepicker').datepicker({
                    format: 'mm/yyyy',
                    minViewMode: 'months',
                    autoclose: !0,
                });
                e.find('.education-select').addClass('select2').select2({
                    width: 'resolve'
                });
                $('#educationSection').append(e);
                
	}
	function addMoreLanguage()
	{
		  if ($('.language-row').length >= 3) {
                    return
                };
                var e = $('.language-sample').clone();
                e.removeClass('language-sample').addClass('language-row');
                e.find('form').addClass('language-form');
                e.find('.language-select').addClass('select2').select2({
                    width: 'resolve'
                });
                $('#languageSection').append(e);
               
                if ($('.language-row').length >= 3) {
                    $(this).hide()
                }
	}
	function addMoreEmployment()
	{
		 var e = $('.employment-sample').clone();
                e.removeClass('employment-sample').addClass('employment-row');
                e.find('form').addClass('employment-form');
                e.find('textarea').addClass('tinymce-text');
                e.find('.datepicker').datepicker({
                    format: 'mm/yyyy',
                    minViewMode: 'months',
                    autoclose: !0,
                });
                $('#employmentSection').append(e);
                bindEmploymentHistory();
                e.fadeIn(300);
                initTextArea();
                initTinyMCE()
	}
	
	
$(document).ready(function() {
            // alert("xxxxxxxxxx");
            $('#addMoreLanguage').click(function() {
                if ($('.language-row').length >= 3) {
                    return
                };
                var e = $('.language-sample').clone();
                e.removeClass('language-sample').addClass('language-row');
                e.find('form').addClass('language-form');
                e.find('.language-select').addClass('select2').select2({
                    width: 'resolve'
                });
                $('#languageSection').append(e);
               
                if ($('.language-row').length >= 3) {
                    $(this).hide()
                }
            });
            $('#addMoreEmployment').click(function() {
                var e = $('.employment-sample').clone();
                e.removeClass('employment-sample').addClass('employment-row');
                e.find('form').addClass('employment-form');
                e.find('textarea').addClass('tinymce-text');
                e.find('.datepicker').datepicker({
                    format: 'mm/yyyy',
                    minViewMode: 'months',
                    autoclose: !0,
                });
                $('#employmentSection').append(e);
                bindEmploymentHistory();
                e.fadeIn(300);
                initTextArea();
                initTinyMCE()
            });
            $('#addMoreEducation').click(function() {
				// alert('hehe');
                var e = $('.education-sample').clone();
                e.removeClass('education-sample').addClass('education-row');
                e.find('form').addClass('education-form');
                e.find('.datepicker').datepicker({
                    format: 'mm/yyyy',
                    minViewMode: 'months',
                    autoclose: !0,
                });
                e.find('.education-select').addClass('select2').select2({
                    width: 'resolve'
                });
                $('#educationSection').append(e);
                
            });
        $('#addMoreReference').click(function() {
                var e = $('.reference-sample').clone();
                e.removeClass('reference-sample').addClass('reference-row');
                e.find('form').addClass('reference-form');
                $('#referenceSection').append(e);
               
            });

            $('.employment-row input[type=checkbox]').change(function() {
                if (this.checked) {
                    $(this).closest('.employment-row').find('input[name=to_date]').val('');
                    $(this).closest('.employment-row').find('input[name=to_date]').attr('readonly', 'readonly');
                    $(this).closest('.employment-row').find('input[name=to_date]').attr('disabled', 'disabled');
                    $(this).closest('.employment-row').find('input[name=to_date]').closest('.input-group').addClass('disabled')
                } else {
                    $(this).closest('.employment-row').find('input[name=to_date]').removeAttr('readonly');
                    $(this).closest('.employment-row').find('input[name=to_date]').removeAttr('disabled');
                    $(this).closest('.employment-row').find('input[name=to_date]').closest('.input-group').removeClass('disabled')
                }
            });



    $('#addMoreSkill').click(function() {
                var e = $('.skill-sample').clone();
                e.removeClass('skill-sample').addClass('skill-row');
                e.find('form').addClass('skill-form');
                e.find('.skill-select').addClass('skill-rating').barrating({
                    theme: 'fontawesome-stars'
                });
                var t = '/wow-cv/api/v1/skills/suggestion';
                e.find('.skill-selection').select2({
                    tags: !1,
                    multiple: !1,
                    minimumInputLength: 2,
                    minimumResultsForSearch: 10,
                    ajax: {
                        url: t,
                        dataType: 'json',
                        type: 'GET',
                        data: function(e) {
                            var t = {
                                query: e.term
                            };
                            return t
                        },
                        processResults: function(e) {
                            if (e.code != 200) {
                                return {}
                            };
                            e = e.data;
                            return {
                                results: $.map(e, function(e) {
                                    return {
                                        text: e.name,
                                        id: e.id
                                    }
                                })
                            }
                        }
                    }
                });
                $('#skillSection').append(e);
                $('.skill-form input').keyup(function(e) {
                    if (e.keyCode == 13) {
                        $(this).blur()
                    }
                });
                
            });





});
var processingStep3JS = {
    deleteData: {
        'language': [],
        'skills': [],
        'employment_history': [],
        'education_history': [],
        'reference': []
    },
    populateData: function(e) {
        processingStep3JS.populateUserInfoData(e.user_info);
        processingStep3JS.populateSummaryData(e.summary);
        processingStep3JS.populateSkillData(e.skills);
        processingStep3JS.populateLanguageData(e.language);
        processingStep3JS.populateEmploymentData(e.employment_history);
        processingStep3JS.populateEducationData(e.education_history);
        processingStep3JS.populateReferenceData(e.reference);
        stepJS.initTinyMCE()
    },
    populateUserInfoData: function(e) {
        if (!e) {
            return
        };
        $('#userInfoForm').deserializeObject(e);
        var t = e.years_of_exp == 0;
        if (t) {
            $('#userInfoForm input[type=checkbox]').prop('checked', !0);
            $('#userInfoForm input[name=years_of_exp]').attr('min', 0);
            $('#userInfoForm input[name=years_of_exp]').val(0);
            $('#userInfoForm input[name=years_of_exp]').attr('readonly', 'readonly')
        };
        $('#userInfoForm .picture-container img').attr('src', e.avatar);
        if (e.nationality == '') {
            $('[name=nationality]').val(0).trigger('change')
        };
        if (e.country == '') {
            $('[name=country]').val(0).trigger('change');
            $('[name=country]').val(0).trigger({
                type: 'select2:select',
                params: {
                    data: {
                        value: 0
                    }
                }
            })
        };
        if (e.avatar) {
            $('#avatarUrl').val(e.avatar)
        }
    },
    populateSummaryData: function(e) {
        if (!e) {
            return
        };
        $('.summary-form').deserializeObject(e)
    },
    populateSkillData: function(e) {
        if (!e || e.length == 0) {
            return
        };
        $('#skillSection').empty();
        $.each(e, function(t) {
            var a = $('.skill-sample').clone();
            a.removeClass('skill-sample').addClass('skill-row');
            a.find('form').addClass('skill-form').attr('data-record', e[t].entry_id).deserializeObject(e[t]);
            a.find('.skill-select').addClass('skill-rating').barrating({
                theme: 'fontawesome-stars'
            }).barrating('set', e[t].rate);
            a.find('.skill-selection').append('<option value="' + e[t].id + '" selected="selected">' + e[t].name + '</option>');
            var n = '/wow-cv/api/v1/skills/suggestion';
            a.find('.skill-selection').select2({
                tags: !1,
                multiple: !1,
                minimumInputLength: 2,
                minimumResultsForSearch: 10,
                ajax: {
                    url: n,
                    dataType: 'json',
                    type: 'GET',
                    data: function(e) {
                        var t = {
                            query: e.term
                        };
                        return t
                    },
                    processResults: function(e) {
                        if (e.code != 200) {
                            return {}
                        };
                        e = e.data;
                        return {
                            results: $.map(e, function(e) {
                                return {
                                    text: e.name,
                                    id: e.id
                                }
                            })
                        }
                    }
                }
            });
            $('#skillSection').append(a);
            a.show()
        });
        $('.skill-form input').keyup(function(e) {
            if (e.keyCode == 13) {
                $(this).blur()
            }
        })
    },
    populateLanguageData: function(e) {
        if (!e || e.length == 0) {
            return
        };
        $('#languageSection').empty();
        $.each(e, function(t) {
            var a = $('.language-sample').clone();
            a.removeClass('language-sample').addClass('language-row');
            a.find('form').addClass('language-form').attr('data-record', e[t].entry_id).deserializeObject(e[t]);
            a.find('.language-select').addClass('select2').select2();
            $('#languageSection').append(a);
            a.show()
        })
    },
    populateEmploymentData: function(e) {
        if (!e || e.length == 0) {
            return
        };
        $('#employmentSection').empty();
        $.each(e, function(t) {
            var a = $('.employment-sample').clone();
            a.removeClass('employment-sample').addClass('employment-row');
            a.find('form').addClass('employment-form').attr('data-record', e[t].entry_id).deserializeObject(e[t]);
            a.find('textarea').addClass('tinymce-text');
            a.find('.datepicker').each(function(e) {
                if ($(this).val() == '30/11/-0001') {
                    $(this).val('')
                };
                var t = $(this).val();
                if (t) {
                    t = t.split('/');
                    if (t.length == 3) {
                        t = t[1] + '/' + t[2];
                        $(this).val(t)
                    }
                }
            });
            a.find('.datepicker').datepicker({
                format: 'mm/yyyy',
                minViewMode: 'months',
                autoclose: !0,
            });
            var n = a.find('input[type=checkbox]').is(':checked');
            if (n) {
                a.find('input[name=to_date]').val('');
                a.find('input[name=to_date]').attr('readonly', 'readonly');
                a.find('input[name=to_date]').attr('disabled', 'disabled');
                a.find('input[name=to_date]').closest('.input-group').addClass('disabled')
            };
            $('#employmentSection').append(a);
            a.show()
        })
    },
    populateEducationData: function(e) {
        if (!e || e.length == 0) {
            return
        };
        $('#educationSection').empty();
        $.each(e, function(t) {
            var a = $('.education-sample').clone();
            a.removeClass('education-sample').addClass('education-row');
            a.find('form').addClass('education-form').attr('data-record', e[t].entry_id).deserializeObject(e[t]);
            a.find('.datepicker').each(function(e) {
                if ($(this).val() == '30/11/-0001') {
                    $(this).val('')
                };
                var t = $(this).val();
                if (t) {
                    t = t.split('/');
                    if (t.length == 3) {
                        t = t[1] + '/' + t[2];
                        $(this).val(t)
                    }
                }
            });
            a.find('.datepicker').datepicker({
                format: 'mm/yyyy',
                minViewMode: 'months',
                autoclose: !0,
            });
            a.find('.education-select').addClass('select2').select2();
            $('#educationSection').append(a);
            a.show()
        })
    },
    populateReferenceData: function(e) {
        if (!e || e.length == 0) {
            return
        };
        $('#referenceSection').empty();
        $.each(e, function(t) {
            var a = $('.reference-sample').clone();
            a.removeClass('reference-sample').addClass('reference-row');
            a.find('form').addClass('reference-form').attr('data-record', e[t].entry_id).deserializeObject(e[t]);
            $('#referenceSection').append(a);
            a.fadeIn(300)
        })
    },
    buildResumeData: function() {
        var e = {
            user_info: processingStep3JS.buildUserInfo(),
            summary: processingStep3JS.buildSummaryInfo(),
            skills: processingStep3JS.buildSkillInfo(),
            language: processingStep3JS.buildLanguageInfo(),
            employment_history: processingStep3JS.buildEmploymentInfo(),
            education_history: processingStep3JS.buildEducationInfo(),
            reference: processingStep3JS.buildReferenceInfo(),
            delete: processingStep3JS.deleteData
        };
        return e
    },
    buildUserInfo: function() {
        var e = $('#userInfoForm').serializeObject();
        return e
    },
    buildSummaryInfo: function() {
        var e = $('.summary-form').serializeObject();
        return e
    },
    buildSkillInfo: function() {
        var e = [];
        $('#skillSection form').each(function(t) {
            var a = {};
            a.rate = $('.br-current', this).data('rating-text');
            a.id = $('.skill-selection :selected', this).val();
            a.name = $('.skill-selection :selected', this).text();
            if ($(this).data('record')) {
                a.entry_id = $(this).data('record')
            };
            e.push(a)
        });
        return e
    },
    buildLanguageInfo: function() {
        var e = [];
        $('#languageSection form').each(function(t) {
            var a = {
                language_id: $(this).find('.language-select :selected').val(),
                language_level_id: $(this).find('input[name=language_level_id]:checked').val()
            };
            if ($(this).data('record')) {
                a.entry_id = $(this).data('record')
            };
            e.push(a)
        });
        return e
    },
    buildEmploymentInfo: function() {
        var e = [];
        $('#employmentSection form').each(function(t) {
            var a = $(this).serializeObject();
            a.from_date = a.from_date ? '01/' + a.from_date : a.from_date;
            a.to_date = a.to_date ? '01/' + a.to_date : a.to_date;
            if ($(this).data('record')) {
                a.entry_id = $(this).data('record')
            };
            e.push(a)
        });
        return e
    },
    buildEducationInfo: function() {
        var e = [];
        $('#educationSection form').each(function(t) {
            var a = $(this).serializeObject();
            a.from_date = a.from_date ? '01/' + a.from_date : a.from_date;
            a.to_date = a.to_date ? '01/' + a.to_date : a.to_date;
            if ($(this).data('record')) {
                a.entry_id = $(this).data('record')
            };
            e.push(a)
        });
        return e
    },
    buildReferenceInfo: function() {
        var e = [];
        $('#referenceSection form').each(function(t) {
            var a = $(this).serializeObject();
            if ($(this).data('record')) {
                a.entry_id = $(this).data('record')
            };
            e.push(a)
        });
        return e
    }
};
 $(document).on('click', '.btn-remove-row', function(e) {
                var t = $(this).closest('.data-row');
                if (!t) {
                    return
                };
                var a = $(t).data('type');
                if (!a) {
                    return
                };
                switch (a) {
                    case 'skill':
                        processingStep3JS.deleteData.skills.push($(t).find('.skill-selection :selected').val());
                        break;
                    case 'language':
                        processingStep3JS.deleteData.language.push($(t).find('.select-language').select2('val'));
                        if ($('.language-row').length < 4) {
                            $('#addMoreLanguage').show()
                        };
                        break;
                    case 'reference':
                        processingStep3JS.deleteData.reference.push($(t).find('form').data('record'));
                        break;
                    case 'employment':
                        processingStep3JS.deleteData.employment_history.push($(t).find('form').data('record'));
                        break;
                    case 'education':
                        processingStep3JS.deleteData.education_history.push($(t).find('form').data('record'));
                        break
                };
                t.remove()
            });

jQuery(document).ready(function($) {
    
  var $sticky = $('.stickyw');
  var $stickyrStopper = $('.sticky-stopper');
  if (!!$sticky.offset()) { // make sure ".sticky" element exists

    var generalSidebarHeight = $sticky.innerHeight();
    // var stickyTop = 200;
    var stickyTop = $sticky.offset().top;
    var stickOffset = 0;
    var stickyStopperPosition = $stickyrStopper.offset().top;
    var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
    var diff = stopPoint + stickOffset;
    
    $(window).scroll(function(){ // scroll event
      var windowTop = $(window).scrollTop(); // returns number


      if (stopPoint < windowTop) {
          $sticky.css({ position: 'absolute', top: diff });

      } else if (stickyTop < windowTop+stickOffset) {

          $sticky.css({ position: 'fixed', top: stickOffset });
          $(".xxx").addClass('col-md-offset-3');
          // $sticky.offset()
          // alert(stickyTop);
      } else {
          $sticky.css({position: 'absolute', top: 'initial'});
          $(".xxx").addClass('col-md-offset-3');
      }
    });

  }
});




function chayngaydi(id){
	
    $('html,body').animate({scrollTop: $("#"+id).offset().top}, 500);
}








    

