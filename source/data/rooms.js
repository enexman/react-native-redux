// marginLeft: -300,
// marginTop: -130,
export const startRoom = 'sr';
export const ROOMS = [
  {
    name: 1,
    rooms: [
      {
        name: startRoom,
        active: true,
        description: '',
        direction: [
          {
            name: 'b1',
            arrow: 'right'
          },
        ],
        // visible: false,
        complete: false,
        position: {left: -290, top: -60, width: 39, height: 39, },
      },

      {
        name: 'a1',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'a2',
            arrow: 'right'
          },
          {
            name: 'b1',
            arrow: 'bottom'
          },
        ],
        action: 'empty',
        complete: false,
        position: {left: -230, top: -120, width: 39, height: 59, },
      },
      {
        name: 'a2',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'a3',
            arrow: 'right'
          },
          {
            name: 'a1',
            arrow: 'left'
          },
        ],
        action: false,
        complete: false,
        position: {left: -190, top: -120, width: 49, height: 49, },
      },
      {
        name: 'a3',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'a2',
            arrow: 'left'
          },
          {
            name: 'b2',
            arrow: 'bottom'
          },
        ],
        action: false,
        complete: false,
        position: {left: -140, top: -110, width: 49, height: 39, },
      },
      {
        name: 'a4',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'a5',
            arrow: 'right'
          },
          {
            name: 'b3',
            arrow: 'bottom'
          },
        ],
        action: false,
        complete: false,
        position: {left: -40, top: -120, width: 49, height: 59, },
      },
      {
        name: 'a5',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'a6',
            arrow: 'right'
          },
          {
            name: 'a4',
            arrow: 'left'
          },
        ],
        action: false,
        complete: false,
        position: {left: 10, top: -120, width: 49, height: 49, },
      },
      {
        name: 'a6',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'a7',
            arrow: 'right'
          },
          {
            name: 'a5',
            arrow: 'left'
          },
          {
            name: 'b4',
            arrow: 'bottom'
          },
        ],
        action: false,
        complete: false,
        position: {left: 60, top: -120, width: 69, height: 69, },
      },
      {
        name: 'a7',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'a8',
            arrow: 'right'
          },
          {
            name: 'a6',
            arrow: 'left'
          },
        ],
        action: false,
        complete: false,
        position: {left: 130, top: -100, width: 49, height: 49, },
      },
      {
        name: 'a8',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'a7',
            arrow: 'left'
          },
          {
            name: 'b5',
            arrow: 'bottom'
          },
        ],
        action: false,
        complete: false,
        position: {left: 180, top: -100, width: 79, height: 49, },
      },

      {
        name: 'b1',
        active: false,
        description: 'В комнате лежит человек, сильно ранен, но еще в сознании',
        direction: [
          {
            name: 'a1',
            arrow: 'top'
          },
          {
            name: 'sr',
            arrow: 'left'
          },
          {
            name: 'c2',
            arrow: 'bottom'
          },
        ],
        action: 'speaker',
        complete: false,
        position: {left: -250, top: -60, width: 69, height: 39, },
      },
      {
        name: 'b2',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'a3',
            arrow: 'top'
          },
          {
            name: 'b3',
            arrow: 'right'
          },
          {
            name: 'c4',
            arrow: 'bottom'
          },
        ],
        action: false,
        complete: false,
        position: {left: -150, top: -70, width: 79, height: 79, },
      },
      {
        name: 'b3',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'a4',
            arrow: 'top'
          },
          {
            name: 'b2',
            arrow: 'left'
          },
        ],
        action: 'speaker',
        complete: false,
        position: {left: -70, top: -60, width: 79, height: 49, },
      },
      {
        name: 'b4',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'a6',
            arrow: 'top'
          },
          {
            name: 'c5',
            arrow: 'bottom'
          },
        ],
        action: false,
        complete: false,
        position: {left: 60, top: -50, width: 39, height: 49, },
      },
      {
        name: 'b5',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'a8',
            arrow: 'top'
          },
          {
            name: 'end',
            arrow: 'bottom'
          },
        ],
        action: false,
        complete: false,
        position: {left: 190, top: -50, width: 69, height: 59, },
      },

      {
        name: 'c1',
        active: false,
        description: 'Медицинская комната',
        direction: [
          {
            name: 'c2',
            arrow: 'right'
          },
          {
            name: 'd1',
            arrow: 'bottom'
          },
        ],
        action: false,
        complete: false,
        position: {left: -260, top: 10, width: 39, height: 39, },
      },
      {
        name: 'c2',
        active: false,
        description: 'Пригтовьтесь к бою с чем-то новым',
        direction: [
          {
            name: 'b1',
            arrow: 'top'
          },
          {
            name: 'c3',
            arrow: 'right'
          },
          {
            name: 'c1',
            arrow: 'left'
          },
        ],
        action: false,
        complete: false,
        position: {left: -220, top: -20, width: 39, height: 69, },
      },
      {
        name: 'c3',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'c4',
            arrow: 'right'
          },
          {
            name: 'c2',
            arrow: 'left'
          },
        ],
        action: false,
        complete: false,
        position: {left: -180, top: 10, width: 59, height: 39, },
      },
      {
        name: 'c4',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'b2',
            arrow: 'top'
          },
          {
            name: 'c3',
            arrow: 'left'
          },
          {
            name: 'd2',
            arrow: 'bottom'
          },
        ],
        action: false,
        complete: false,
        position: {left: -120, top: 10, width: 69, height: 39, },
      },
      {
        name: 'c5',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'b4',
            arrow: 'top'
          },
        ],
        action: false,
        complete: false,
        position: {left: 0, top: 0, width: 99, height: 39, },
      },
      {
        name: 'c6',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'd6',
            arrow: 'bottom'
          },
        ],
        action: false,
        complete: false,
        position: {left: 130, top: 10, width: 49, height: 39, },
      },

      {
        name: 'd1',
        active: false,
        description: 'Оружейная комната',
        direction: [
          {
            name: 'c1',
            arrow: 'top'
          },
        ],
        action: false,
        complete: false,
        position: {left: -290, top: 50, width: 69, height: 39, },
      },
      {
        name: 'd2',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'c4',
            arrow: 'top'
          },
          {
            name: 'd3',
            arrow: 'right'
          },
        ],
        action: 'speaker',
        complete: false,
        position: {left: -110, top: 50, width: 49, height: 39, },
      },
      {
        name: 'd3',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'd4',
            arrow: 'right'
          },
          {
            name: 'd2',
            arrow: 'left'
          },
        ],
        action: false,
        complete: false,
        position: {left: -60, top: 50, width: 59, height: 39, },
      },
      {
        name: 'd4',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'd5',
            arrow: 'right'
          },
          {
            name: 'd3',
            arrow: 'left'
          },
        ],
        action: false,
        complete: false,
        position: {left: 0, top: 50, width: 59, height: 39, },
      },
      {
        name: 'd5',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'd6',
            arrow: 'right'
          },
          {
            name: 'd4',
            arrow: 'left'
          },
        ],
        action: false,
        complete: false,
        position: {left: 60, top: 50, width: 39, height: 39, },
      },
      {
        name: 'd6',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'c6',
            arrow: 'top'
          },
          {
            name: 'd5',
            arrow: 'left'
          },
        ],
        action: false,
        complete: false,
        position: {left: 100, top: 50, width: 79, height: 39, },
      },

      {
        name: 'end',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'b5',
            arrow: 'top'
          },
        ],
        action: false,
        complete: false,
        position: {left: 190, top: 10, width: 49, height: 49, },
      },
    ]
  },
  {
    name: 2,
    rooms: [
      {
        name: startRoom,
        active: true,
        description: 'Вы очнулись, огляделись, увидели выход из комнаты Вы очнулись,' +
        ' огляделись, увидели выход из комнаты Вы очнулись, ' +
        'огляделись, увидели выход из комнаты Вы очнулись, ' +
        'огляделись, увидели выход из комнаты Вы очнулись, ' +
        'огляделись, увидели выход из комнаты',
        direction: [
          {
            name: 'b1',
            arrow: 'right'
          },
        ],
        action: false,
        complete: false,
        position: {left: -290, top: -60, width: 39, height: 39, },
      },

      {
        name: 'a1',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'a2',
            arrow: 'right'
          },
          {
            name: 'b1',
            arrow: 'bottom'
          },
        ],
        action: 'empty',
        complete: false,
        position: {left: -230, top: -120, width: 39, height: 59, },
      },
      {
        name: 'a2',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'a3',
            arrow: 'right'
          },
          {
            name: 'a1',
            arrow: 'left'
          },
        ],
        action: false,
        complete: false,
        position: {left: -190, top: -120, width: 49, height: 49, },
      },
      {
        name: 'a3',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'a2',
            arrow: 'left'
          },
          {
            name: 'b2',
            arrow: 'bottom'
          },
        ],
        action: false,
        complete: false,
        position: {left: -140, top: -110, width: 49, height: 39, },
      },
      {
        name: 'a4',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'a5',
            arrow: 'right'
          },
          {
            name: 'b3',
            arrow: 'bottom'
          },
        ],
        action: false,
        complete: false,
        position: {left: -40, top: -120, width: 49, height: 59, },
      },
      {
        name: 'a5',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'a6',
            arrow: 'right'
          },
          {
            name: 'a4',
            arrow: 'left'
          },
        ],
        action: false,
        complete: false,
        position: {left: 10, top: -120, width: 49, height: 49, },
      },
      {
        name: 'a6',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'a7',
            arrow: 'right'
          },
          {
            name: 'a5',
            arrow: 'left'
          },
          {
            name: 'b4',
            arrow: 'bottom'
          },
        ],
        action: false,
        complete: false,
        position: {left: 60, top: -120, width: 69, height: 69, },
      },
      {
        name: 'a7',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'a8',
            arrow: 'right'
          },
          {
            name: 'a6',
            arrow: 'left'
          },
        ],
        action: false,
        complete: false,
        position: {left: 130, top: -100, width: 49, height: 49, },
      },
      {
        name: 'a8',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'a7',
            arrow: 'left'
          },
          {
            name: 'b5',
            arrow: 'bottom'
          },
        ],
        action: false,
        complete: false,
        position: {left: 180, top: -100, width: 79, height: 49, },
      },

      {
        name: 'b1',
        active: false,
        description: 'В комнате лежит человек, сильно ранен, но еще в сознании',
        direction: [
          {
            name: 'a1',
            arrow: 'top'
          },
          {
            name: 'sr',
            arrow: 'left'
          },
          {
            name: 'c2',
            arrow: 'bottom'
          },
        ],
        action: 'speaker',
        complete: false,
        position: {left: -250, top: -60, width: 69, height: 39, },
      },
      {
        name: 'b2',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'a3',
            arrow: 'top'
          },
          {
            name: 'b3',
            arrow: 'right'
          },
          {
            name: 'c4',
            arrow: 'bottom'
          },
        ],
        action: false,
        complete: false,
        position: {left: -150, top: -70, width: 79, height: 79, },
      },
      {
        name: 'b3',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'a4',
            arrow: 'top'
          },
          {
            name: 'b2',
            arrow: 'left'
          },
        ],
        action: 'speaker',
        complete: false,
        position: {left: -70, top: -60, width: 79, height: 49, },
      },
      {
        name: 'b4',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'a6',
            arrow: 'top'
          },
          {
            name: 'c5',
            arrow: 'bottom'
          },
        ],
        action: false,
        complete: false,
        position: {left: 60, top: -50, width: 39, height: 49, },
      },
      {
        name: 'b5',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'a8',
            arrow: 'top'
          },
          {
            name: 'end',
            arrow: 'bottom'
          },
        ],
        action: false,
        complete: false,
        position: {left: 190, top: -50, width: 69, height: 59, },
      },

      {
        name: 'c1',
        active: false,
        description: 'Медицинская комната',
        direction: [
          {
            name: 'c2',
            arrow: 'right'
          },
          {
            name: 'd1',
            arrow: 'bottom'
          },
        ],
        action: false,
        complete: false,
        position: {left: -260, top: 10, width: 39, height: 39, },
      },
      {
        name: 'c2',
        active: false,
        description: 'Пригтовьтесь к бою с чем-то новым',
        direction: [
          {
            name: 'b1',
            arrow: 'top'
          },
          {
            name: 'c3',
            arrow: 'right'
          },
          {
            name: 'c1',
            arrow: 'left'
          },
        ],
        action: false,
        complete: false,
        position: {left: -220, top: -20, width: 39, height: 69, },
      },
      {
        name: 'c3',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'c4',
            arrow: 'right'
          },
          {
            name: 'c2',
            arrow: 'left'
          },
        ],
        action: false,
        complete: false,
        position: {left: -180, top: 10, width: 59, height: 39, },
      },
      {
        name: 'c4',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'b2',
            arrow: 'top'
          },
          {
            name: 'c3',
            arrow: 'left'
          },
          {
            name: 'd2',
            arrow: 'bottom'
          },
        ],
        action: false,
        complete: false,
        position: {left: -120, top: 10, width: 69, height: 39, },
      },
      {
        name: 'c5',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'b4',
            arrow: 'top'
          },
        ],
        action: false,
        complete: false,
        position: {left: 0, top: 0, width: 99, height: 39, },
      },
      {
        name: 'c6',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'd6',
            arrow: 'bottom'
          },
        ],
        action: false,
        complete: false,
        position: {left: 130, top: 10, width: 49, height: 39, },
      },

      {
        name: 'd1',
        active: false,
        description: 'Оружейная комната',
        direction: [
          {
            name: 'c1',
            arrow: 'top'
          },
        ],
        action: false,
        complete: false,
        position: {left: -290, top: 50, width: 69, height: 39, },
      },
      {
        name: 'd2',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'c4',
            arrow: 'top'
          },
          {
            name: 'd3',
            arrow: 'right'
          },
        ],
        action: 'speaker',
        complete: false,
        position: {left: -110, top: 50, width: 49, height: 39, },
      },
      {
        name: 'd3',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'd4',
            arrow: 'right'
          },
          {
            name: 'd2',
            arrow: 'left'
          },
        ],
        action: false,
        complete: false,
        position: {left: -60, top: 50, width: 59, height: 39, },
      },
      {
        name: 'd4',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'd5',
            arrow: 'right'
          },
          {
            name: 'd3',
            arrow: 'left'
          },
        ],
        action: false,
        complete: false,
        position: {left: 0, top: 50, width: 59, height: 39, },
      },
      {
        name: 'd5',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'd6',
            arrow: 'right'
          },
          {
            name: 'd4',
            arrow: 'left'
          },
        ],
        action: false,
        complete: false,
        position: {left: 60, top: 50, width: 39, height: 39, },
      },
      {
        name: 'd6',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'c6',
            arrow: 'top'
          },
          {
            name: 'd5',
            arrow: 'left'
          },
        ],
        action: false,
        complete: false,
        position: {left: 100, top: 50, width: 79, height: 39, },
      },

      {
        name: 'end',
        active: false,
        description: 'Пустая комната',
        direction: [
          {
            name: 'b5',
            arrow: 'top'
          },
        ],
        action: false,
        complete: false,
        position: {left: 190, top: 10, width: 49, height: 49, },
      },
    ]
  },
];
