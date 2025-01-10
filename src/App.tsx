import { ThemeProvider } from "./components/theme-provider"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
function App() {

  const [postType, setPostType] = useState('')
  const [analysis, setAnalysis] = useState('')
  const [loading, setLoading] = useState(false)

  const sampleData = [
    { post_id: 1, post_type: 'carousel', likes: 120, shares: 30, comments: 15 },
    { post_id: 2, post_type: 'reels', likes: 200, shares: 50, comments: 80 },
    { post_id: 3, post_type: 'static_image', likes: 80, shares: 10, comments: 5 },
    { post_id: 4, post_type: 'carousel', likes: 150, shares: 40, comments: 20 },
    { post_id: 5, post_type: 'reels', likes: 300, shares: 70, comments: 100 },
    { post_id: 6, post_type: 'static_image', likes: 60, shares: 20, comments: 10 },
    { post_id: 7, post_type: 'carousel', likes: 130, shares: 35, comments: 25 },
    { post_id: 8, post_type: 'reels', likes: 250, shares: 60, comments: 90 },
    { post_id: 9, post_type: 'static_image', likes: 100, shares: 15, comments: 8 },
  ]

  const analyzeData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}/analyze`, {
        params: {
          ptype: postType
        }
      });
      console.log(response);
      
      setAnalysis(response.data.response)
    } catch (error) {
      console.error('Error fetching analysis:', error)
      setAnalysis('Error fetching analysis. Please try again.')
    }
    setLoading(false)
  }

  return (
    <>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <main className="flex-grow">
        <div className="flex justify-center items-center h-16 bg-gray-800">
          <h1 className="text-3xl font-bold text-white">Social Media Engagement Analyzer</h1>
        </div>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white">
      <div className="w-full md:w-1/2 p-8 overflow-auto">
        <h2 className="text-2xl font-bold mb-4">Sample Data</h2>
        <Card className="bg-gray-800 mb-4 p-5">
          <CardContent>
            <div className="flex space-x-4 mb-4">
              <div className="flex-grow">
                <Select onValueChange={setPostType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select post type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700">
                    <SelectItem value="reels">Reels</SelectItem>
                    <SelectItem value="carousel">Carousel</SelectItem>
                    <SelectItem value="static_image">Static Image</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={analyzeData} disabled={!postType || loading}>
                {loading ? 'Analyzing...' : 'Analyze'}
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Post ID</TableHead>
                  <TableHead>Post Type</TableHead>
                  <TableHead>Likes</TableHead>
                  <TableHead>Shares</TableHead>
                  <TableHead>Comments</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleData.map((post) => (
                  <TableRow key={post.post_id}>
                    <TableCell>{post.post_id}</TableCell>
                    <TableCell>{post.post_type}</TableCell>
                    <TableCell>{post.likes}</TableCell>
                    <TableCell>{post.shares}</TableCell>
                    <TableCell>{post.comments}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <div className="w-full md:w-1/2 p-8 overflow-auto">
        <h2 className="text-2xl font-bold mb-4">Analysis</h2>
        <Card className="bg-gray-800 p-5">
          <CardContent>
            <ReactMarkdown>{analysis}</ReactMarkdown>
          </CardContent>
        </Card>
      </div>
    </div>
      </main>
      </ThemeProvider>
    </>
  )
}

export default App
