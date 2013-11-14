var html = [
    '<div id="plone-global-topbar-wrapper">',
      '<div id="plone-global-topbar-iframe">',
        '<!-- Logo -->',
        '<div id="plone-global-topbar-logo">',
          '<img alt="Plone" src="{{ BASE_URL }}/img/logo_plone_30.png"/>',
          '<a href="#" id="display_mobile">MENU</a>',
        '</div>',




        '<!-- Sites -->',
        '<div id="plone-global-topbar-sites">',
          '<div id="sites-select">',
            '<ul>',
              '<li><a href="#">Select your country</a>',
              '<ul>',
                '<li><a href="#">Catalunya</a></li>',
                '<li><a href="#">Pais Basc</a></li>',
                '<li><a href="#">Germany</a></li>',
                '<li><a href="#">Italy</a></li>',
              '</ul>',
              '</li>',
            '</ul>',
          '</div>',
        '</div>',


        '<!-- Search box -->',
        '<div id="plone-global-topbar-searchbox">',
          '<gcse:search></gcse:search>',
        '</div>',

        '<div id="plone-global-topbar-mainlinks">',
          '<!-- Planet -->',
          '<ul id="links-select">',
            '<li>',
            '<a href="http://planet.plone.org" title="Plone Planet">PLANET</a>',
            '<div class="caixa-desplegada">',
              '<h2>Thank\'s to collaborate with us!</h2>',
              '<hr>',
              '<div class="columnna-caixa-desplegada">',
                '<h5>CODING</h5>',
                '<ul>',
                  '<li><a href="#">Squash bugs!</a></li>',
                  '<li><a href="#">Improve it!</a></li>',
                  '<li><a href="#">Create new add-ons!</a></li>',
                  '<li><a href="#">Review and test!</a></li>',
                '</ul>',
              '</div>',
              '<div class="columnna-caixa-desplegada">',
                '<h5>WRITING</h5>',
                '<ul>',
                  '<li><a href="#">Add a bug!</a></li>',
                  '<li><a href="#">Write documentation</a></li>',
                  '<li><a href="#">Blog it!</a></li>',
                '</ul>',
              '</div>',
              '<div class="columnna-caixa-desplegada">',
                '<h5>CODING</h5>',
                '<ul>',
                  '<li><a href="#">Option1</a></li>',
                  '<li><a href="#">Option2</a></li>',
                  '<li><a href="#">Option3</a></li>',
                '</ul>',
              '</div>',

            '</div>',
            '</li>',
            '<!-- Developers -->',
            '<li>',
            '<a href="http://developers.plone.org" title="Plone Developers">DEVELOPERS</a>',

            '</li>',
            '<!-- Network -->',
            '<li>',
            '<a href="http://plone.com" title="Plone Com">NETWORK</a>',
            '</li>',
            '<!-- Contribute to Plone -->',
            '<li>',
            '<a href="http://plone.org" title="Plone Org">CONTRIBUTE TO PLONE</a>',
            '</li>',
            '<!-- Community -->',
            '<li>',
            '<a href="http://plone.org" title="Plone Org">COMMUNITY</a>',
            '</li>',
          '</ul>',
        '</div>',
      '</div>',
    '</div>'
];
populateWidget(html);
