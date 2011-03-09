class ApiController < ApplicationController
  require 'net/http'
  require 'xml'
  
  def cabs    
    s = Net::HTTP.get_response(URI.parse('http://cabspotting.org/cabs.xml.php?m=60')).body
    @output = Hash.from_xml(s).to_json
    
    render :layout => false
  end
  
  def cab
    s = Net::HTTP.get_response(URI.parse("http://cabspotting.org/cab.xml.php?cab=#{params[:cab]}&m=45")).body
    @output = Hash.from_xml(s).to_json
    
    render :layout => false
  end
end
