class Layouts::Application < Mustache::Rails
  def stylesheets
    stylesheet_link_tag 'cabspotting'
  end
  
  def javascripts
    javascript_include_tag 'jquery', 'jquery.ba-bbq.min', 'cabspotting'
  end
end