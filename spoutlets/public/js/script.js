var chart, chart_share;

Highcharts.Chart.prototype.tooltipFormatter = function(mood) {
  if (mood <= 2) {
    return 'Very Unhappy'; 
  } else if (mood <= 4) {
    return 'Unhappy';
  } else if (mood <= 6) {
    return 'Ok';
  } else if (mood <= 8) {
    return 'Happy';
  } else if (mood <= 10) {
      return 'Very Happy';
  }
}

$(document).ready(function() {
  if ($('#chart-graph').length) {
  chart = new Highcharts.Chart({
    chart: {
      renderTo: 'chart-graph'
    },
    title: {
      text: 'Mood Graph'
    },
    subtitle: {
      text: null
    },
    xAxis: {
      labels: {
        enabled: false
      }
    },
    yAxis: {
      title: {
        text: 'Mood'
      },
      labels: {
        enabled: false
      },
      min: 0,
      max: 10,
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null,
      plotBands: [{ 
        from: 0,
        to: 2,
        color: 'rgba(68, 170, 213, 0.1)',
        label: {
          text: 'Very Unhappy',
          style: {
            color: '#606060'
          }
        }
      }, {
        from: 2,
        to: 4,
        color: 'rgba(0, 0, 0, 0)',
        label: {
          text: 'Unhappy',
          style: {
            color: '#606060'
          }
        }
      }, 
      { 
        from: 4,
        to: 6,
        color: 'rgba(0, 0, 0, 0)',
        label: {
          text: 'Ok',
          style: {
            color: '#606060'
          }
        }
      }, {
        from: 6,
        to: 8,
        color: 'rgba(68, 170, 213, 0.1)',
        label: {
          text: 'Happy',
          style: {
            color: '#606060'
          }
        }
      }, {
        from: 8,
        to: 10,
        color: 'rgba(0, 0, 0, 0)',
        label: {
          text: 'Very Happy',
          style: {
            color: '#606060'
          }
        }
      }]
    },
    tooltip: {
      formatter: function() {
          var formatterString = Highcharts.dateFormat('%e. %b %Y, %H:00', this.x) +': '+ chart.tooltipFormatter(this.y);

          if (this.point.config[2] != undefined) {
            formatterString += '<br />Comment: ' + this.point.config[2].comment;
          };
          return formatterString;
      },
    },
    plotOptions: {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: false,
          states: {
            hover: {
              enabled: true,
              symbol: 'circle',
              radius: 5,
              lineWidth: 1
            }
          }
        },
        pointInterval: 3600000, // one hour
        pointStart: Date.UTC(2009, 9, 6, 0, 0, 0)
      }
    },
  series: [{
     name: 'Rating',
     data: [
       [Date.UTC(2012, 1, 1, 8, 54), 3, {comment: "#bodysucks"}],
       [Date.UTC(2012, 1, 2, 7, 22), 5, {comment: "#lesssick"}],
       [Date.UTC(2012, 1, 3, 11, 02), 5 ],  
       [Date.UTC(2012, 1, 5, 10, 16), 7  ],
       [Date.UTC(2012, 1, 6, 22, 03), 5  ],
       [Date.UTC(2012, 1, 7, 20, 59), 4  ]
    ]}],
    navigation: {
      menuItemStyle: {
        fontSize: '10px'
      }
    }
  });
  };

  if ($('#chart-graph-mood').length) {
  chart = new Highcharts.Chart({
    chart: {
      renderTo: 'chart-graph-mood'
    },
    title: {
      text: 'Mood Graph'
    },
    subtitle: {
      text: null
    },
    xAxis: {
      labels: {
        enabled: false
      }
    },
    yAxis: {
      title: {
        text: 'Mood'
      },
      labels: {
        enabled: false
      },
      min: 0,
      max: 10,
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null,
      plotBands: [{ 
        from: 0,
        to: 2,
        color: 'rgba(68, 170, 213, 0.1)',
        label: {
          text: 'Very Unhappy',
          style: {
            color: '#606060'
          }
        }
      }, {
        from: 2,
        to: 4,
        color: 'rgba(0, 0, 0, 0)',
        label: {
          text: 'Unhappy',
          style: {
            color: '#606060'
          }
        }
      }, 
      { 
        from: 4,
        to: 6,
        color: 'rgba(0, 0, 0, 0)',
        label: {
          text: 'Ok',
          style: {
            color: '#606060'
          }
        }
      }, {
        from: 6,
        to: 8,
        color: 'rgba(68, 170, 213, 0.1)',
        label: {
          text: 'Happy',
          style: {
            color: '#606060'
          }
        }
      }, {
        from: 8,
        to: 10,
        color: 'rgba(0, 0, 0, 0)',
        label: {
          text: 'Very Happy',
          style: {
            color: '#606060'
          }
        }
      }]
    },
    tooltip: {
      formatter: function() {
          var formatterString = Highcharts.dateFormat('%e. %b %Y, %H:00', this.x) +': '+ chart.tooltipFormatter(this.y);

          if (this.point.config[2] != undefined) {
            formatterString += '<br />Comment: ' + this.point.config[2].comment;
          };
          return formatterString;
      },
    },
    plotOptions: {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: false,
          states: {
            hover: {
              enabled: true,
              symbol: 'circle',
              radius: 5,
              lineWidth: 1
            }
          }
        },
        pointInterval: 3600000, // one hour
        pointStart: Date.UTC(2009, 9, 6, 0, 0, 0)
      }
    },
    series: [{
       name: 'Rating',
       data: [
         [Date.UTC(2012, 1, 1, 8, 54), 3, {comment: "#bodysucks"}],
         [Date.UTC(2012, 1, 2, 7, 22), 5, {comment: "#lesssick"}],
         [Date.UTC(2012, 1, 3, 11, 02), 5 ],  
         [Date.UTC(2012, 1, 5, 10, 16), 7  ],
         [Date.UTC(2012, 1, 6, 22, 03), 5  ],
         [Date.UTC(2012, 1, 7, 20, 59), 4  ]
      ]}],
    navigation: {
      menuItemStyle: {
        fontSize: '10px'
      }
    }
  });
};

if ($('#chart-graph-meters').length) {
  chart_share = new Highcharts.Chart({
    chart: {
      renderTo: 'chart-graph-meters'
    },
    title: {
      text: 'Mood Graph'
    },
    subtitle: {
      text: null
    },
    xAxis: {
      labels: {
        enabled: false
      }
    },
    yAxis: {
      title: {
        text: 'Mood'
      },
      labels: {
        enabled: false
      },
      min: 0,
      max: 10,
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null,
      plotBands: [{ 
        from: 0,
        to: 2,
        color: 'rgba(68, 170, 213, 0.1)',
        label: {
          text: 'Very Unhappy',
          style: {
            color: '#606060'
          }
        }
      }, {
        from: 2,
        to: 4,
        color: 'rgba(0, 0, 0, 0)',
        label: {
          text: 'Unhappy',
          style: {
            color: '#606060'
          }
        }
      }, 
      { 
        from: 4,
        to: 6,
        color: 'rgba(0, 0, 0, 0)',
        label: {
          text: 'Ok',
          style: {
            color: '#606060'
          }
        }
      }, {
        from: 6,
        to: 8,
        color: 'rgba(68, 170, 213, 0.1)',
        label: {
          text: 'Happy',
          style: {
            color: '#606060'
          }
        }
      }, {
        from: 8,
        to: 10,
        color: 'rgba(0, 0, 0, 0)',
        label: {
          text: 'Very Happy',
          style: {
            color: '#606060'
          }
        }
      }]
    },
    tooltip: {
      formatter: function() {
          var formatterString = Highcharts.dateFormat('%e. %b %Y, %H:00', this.x) +': '+ chart.tooltipFormatter(this.y);

          if (this.point.config[2] != undefined) {
            formatterString += '<br />Comment: ' + this.point.config[2].comment;
          };
          return formatterString;
      },
    },
    plotOptions: {
      spline: {
        lineWidth: 2,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: false,
          states: {
            hover: {
              enabled: true,
              symbol: 'circle',
              radius: 5,
              lineWidth: 1
            }
          }
        },
        pointInterval: 3600000, // one hour
        pointStart: Date.UTC(2009, 9, 6, 0, 0, 0)
      }
    },
  series: [{
     name: 'You',
     data: [
       [Date.UTC(2012, 1, 1, 8, 54), 3, {comment: "#bodysucks"}],
       [Date.UTC(2012, 1, 2, 7, 22), 5, {comment: "#lesssick"}],
       [Date.UTC(2012, 1, 3, 11, 02), 5],  
       [Date.UTC(2012, 1, 5, 10, 16), 7],
       [Date.UTC(2012, 1, 6, 22, 03), 5],
       [Date.UTC(2012, 1, 7, 20, 59), 4]
    ]},
    {
     name: 'Spoutlets',
     data: [
       [Date.UTC(2012, 1, 1, 8, 54), 2],
       [Date.UTC(2012, 1, 2, 4, 22), 3],
       [Date.UTC(2012, 1, 3, 11, 02), 3],  
       [Date.UTC(2012, 1, 5, 10, 16), 5],
       [Date.UTC(2012, 1, 6, 12, 03), 5],
       [Date.UTC(2012, 1, 6, 20, 02), 5],
       [Date.UTC(2012, 1, 7, 12, 49), 4]
    ]}
    ],
    navigation: {
      menuItemStyle: {
        fontSize: '10px'
      }
    }
  });
};     

if ($('#share-mood-graph').length) {
  chart = new Highcharts.Chart({
    chart: {
      renderTo: 'share-mood-graph',
      width: 300,
      height: 100
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    xAxis: {
      labels: {
        enabled: false
      }
    },
    yAxis: {
      title: {
        text: 'Mood'
      },
      labels: {
        enabled: false
      },
      min: 0,
      max: 10,
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null,
    },
    tooltip: {
      formatter: function() {
          var formatterString = Highcharts.dateFormat('%e. %b %Y, %H:00', this.x) +': '+ chart.tooltipFormatter(this.y);

          if (this.point.config[2] != undefined) {
            formatterString += '<br />Comment: ' + this.point.config[2].comment;
          };
          return formatterString;
      },
    },
    plotOptions: {
      spline: {
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: false,
          states: {
            hover: {
              enabled: true,
              symbol: 'circle',
              radius: 5,
              lineWidth: 1
            }
          }
        },
        pointInterval: 3600000, // one hour
        pointStart: Date.UTC(2009, 9, 6, 0, 0, 0)
      }
    },
  legend: {
    enabled: false
  },
  series: [{
     data: [
       [Date.UTC(2012, 1, 1, 8, 54), 3, {comment: "#bodysucks"}],
       [Date.UTC(2012, 1, 2, 7, 22), 5, {comment: "#lesssick"}],
       [Date.UTC(2012, 1, 3, 11, 02), 5],  
       [Date.UTC(2012, 1, 5, 10, 16), 7],
       [Date.UTC(2012, 1, 6, 22, 03), 5],
       [Date.UTC(2012, 1, 7, 20, 59), 4]
    ]}
    ],
    navigation: {
      menuItemStyle: {
        fontSize: '10px'
      }
    }
  });
};  

// Issue #23: Relate Button Increase by 1

$(".btn-relate").click(function() {
  var $elem = $(this).parent().find('> span');
  var currentValue = parseFloat($elem.html(), 10);
  $elem.fadeOut('fast', function() { $elem.html(++currentValue).fadeIn('fast') });
  return false;
});

//Issue #39: expand/collapse of text area on /vent-stream

var ventFormActions = function(params) {
  var $controls = $(params.controls),
        $textarea = $(params.textarea),
        controlsHeight = params.controlsHeight,
        expandedHeight = params.expandedHeight,
        initialHeight = params.initialHeight;

  var that = {
    expand: function() {
      if ($textarea.hasClass('expanded')) return;
      $textarea.animate({
        'height': expandedHeight
      }, 
      {
        'duration': 300,
        'queue': false
      });
      that.showControls();
    },

    collapse: function() {
      $textarea[0].value = '';
      $textarea.animate({
        'height': initialHeight
      }, 
      {
        'duration': 300,
        'queue': false
      });      
      that.hideControls();
    },

    showControls: function() {
      $controls.removeClass('hide').css({'opacity': 0}).height(0).stop(true, false)
        .animate({
          'height': controlsHeight,
          'opacity': 1
        },
        {
          "duration": 300,
          "complete": function() { $textarea.addClass('expanded') },
          "queue": false
        });
    },

    hideControls: function() {
      $controls.stop(true, false)
        .animate({
          'opacity': 0,
          'height': 0
        },
        {
          "complete": function() { $controls.addClass('hide'); $textarea.removeClass('expanded') },
          "duration": 300,
          "queue": false
        })
    }
  }

  return {
    collapse: that.collapse,
    expand: that.expand
  }
}


if ($('.vent-form textarea').length) {
  var formParams = {
    textarea: '.vent-form textarea',
    controls: '.vent-control',
    initialHeight: '20px',
    expandedHeight: '80px',
    controlsHeight: '30px'
  };
  var ventForm = new ventFormActions(formParams);

  $(formParams.textarea).focus(function() {
     ventForm.expand();
  });
  $(formParams.controls + "> .close").click(function() {
     ventForm.collapse();
  });
}

//Issue #41: Tag it

var tagFormActions = function(params) {
  var $container = $(params.container),
        $tagsContainer = $(params.tagsContainer),
        reasonString = '',
        hashesArray = [];
  
  var that = {
    tagIt: function() {
      reasonString = $container.find('#feelings')[0].value;
      hashesArray = reasonString.match(/#\w+/g);
      that.addHashes(hashesArray);
    },

    addHashes: function(hashesArray) {
      if (hashesArray == null) return;

      var currentHashesArray = [];
      $tagsContainer.find('> a').each(function(index, value) { currentHashesArray.push(value.innerHTML) });
      
      $.each(hashesArray, function(index, value) {
        if (currentHashesArray.indexOf(value) > -1) { 
          that.IncreaseTagSize(currentHashesArray.indexOf(value)); 
          return; 
        };
        $tagsContainer.animate({ 'opacity': 0 }, 500, function() {
          var elem = '<a href="#" class="lnk-tag" style="font-size: 14px">' + value + '</a>';
          $tagsContainer.prepend(elem);
        });
      });

      $tagsContainer.animate({ 'opacity': 1 });
    },

    IncreaseTagSize: function(elemIndex) {
      $tagsContainer.find('a').eq(elemIndex).animate({'font-size': "+=3px"})
    }
  }

  return {
    tagIt: that.tagIt
  }
}

var tagFormParams = {
  container: '.form-feelings',
  tagsContainer: '.tag-feelings'
}

if ($('.form-feelings').length) {
  var tagForm = new tagFormActions(tagFormParams);

  $(tagFormParams.container).submit(function(e) {
    e.preventDefault();
    tagForm.tagIt();
  });
}

// Issue #38: Mood Faces on Vent Stream

$('.vent-mood, .mood-options span').click(function() {
  $(this).parent().parent().find('.mood-options').fadeToggle('slow');
})

// Issue #55: Support circle pop-up

$('.circle-name').click(function(e) {
  e.preventDefault();
  $('.pop-up').fadeOut('fast');
  $(this).parent().find('> .pop-up').fadeToggle('fast');
});

});