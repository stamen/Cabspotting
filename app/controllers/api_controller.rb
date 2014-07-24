class ApiController < ApplicationController
  require 'net/http'

  def cabs
    s = Net::HTTP.get_response(URI.parse('http://cabspotting.org/cabs.xml.php?m=60')).body
    @output = Hash.from_xml(s).to_json

    render :layout => false
  end

=begin
    {
      :type => 'FeatureCollection',
      :features => [
        {
          :type => 'Feature',
          :properties => {
            :cab => cab_id,
            :status => E|M|?,
            :time => [timestamps]
          },
          :geometry => {
            :type => 'LineString',
            :coordinates => [
              [x, y]
            ]
          }
        }
      ]
    }
=end

  def cab
    s = Net::HTTP.get_response(URI.parse("http://cabspotting.org/cab.xml.php?cab=#{params[:cab]}&m=45")).body
    raw_data = Hash.from_xml(s).map do |item|

    end

    @output = Hash.from_xml(s).to_json

    render :layout => false
  end
end
